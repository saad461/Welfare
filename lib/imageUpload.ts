import sharp from 'sharp';
import heicConvert from 'heic-convert';
import { supabase } from './supabase';

export interface UploadOptions {
  bucket: string;
  path: string;
  onProgress?: (percentage: number) => void;
}

/**
 * Utility function to convert and upload images to Supabase Storage.
 * This should be called from the server side (Server Actions or API Routes)
 * because it uses Node.js libraries (sharp, heic-convert).
 */
export async function uploadImageAsWebP(
  fileBuffer: Buffer,
  fileName: string,
  options: UploadOptions
): Promise<string | null> {
  try {
    let buffer = fileBuffer;
    const ext = fileName.split('.').pop()?.toLowerCase();

    // 1 & 2. Handle HEIC/HEIF and conversion
    if (ext === 'heic' || ext === 'heif') {
      buffer = Buffer.from(
        await heicConvert({
          buffer: fileBuffer,
          format: 'JPEG',
          quality: 1,
        })
      );
    }

    // 3, 4 & 5. Process with Sharp (WebP, quality 85, resize max 1920)
    let sharpInstance = sharp(buffer);
    const metadata = await sharpInstance.metadata();

    let pipeline = sharpInstance
      .rotate() // Auto-rotate based on EXIF
      .webp({ quality: 85 });

    if (metadata.width && metadata.width > 1920) {
      pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
    }

    const processedBuffer = await pipeline.toBuffer();

    // 6. Upload to Supabase Storage
    const webpFileName = `${fileName.split('.')[0]}_${Date.now()}.webp`;
    const fullPath = `${options.path}/${webpFileName}`.replace(/\/+/g, '/');

    const { data, error } = await supabase.storage
      .from(options.bucket)
      .upload(fullPath, processedBuffer, {
        contentType: 'image/webp',
        upsert: true,
      });

    if (error) {
      throw error;
    }

    // 7. Return public URL
    const { data: { publicUrl } } = supabase.storage
      .from(options.bucket)
      .getPublicUrl(fullPath);

    return publicUrl;
  } catch (error) {
    console.error('Error in uploadImageAsWebP:', error);
    return null;
  }
}
