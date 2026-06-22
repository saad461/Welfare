import sharp from 'sharp';
import heicConvert from 'heic-convert';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

async function convertImages() {
  console.log('🚀 Starting image conversion to WebP...');

  const files = await glob('**/*.{heic,HEIC,jpg,jpeg,JPG,JPEG,png,PNG,bmp,BMP,tiff,TIFF}', {
    cwd: PUBLIC_IMAGES_DIR,
    absolute: true,
  });

  let convertedCount = 0;
  let failedCount = 0;
  let skippedCount = 0;
  let totalSizeSaved = 0;

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();
    const fileName = path.basename(filePath);
    const directory = path.dirname(filePath);
    const webpPath = path.join(directory, `${path.basename(filePath, path.extname(filePath))}.webp`);

    if (ext === '.webp') {
      skippedCount++;
      continue;
    }

    try {
      const originalSize = fs.statSync(filePath).size;
      let buffer = fs.readFileSync(filePath);

      if (ext === '.heic' || ext === '.heif') {
        try {
          buffer = Buffer.from(await heicConvert({
            buffer,
            format: 'JPEG',
            quality: 1,
          }));
        } catch (heicError) {
          console.warn(`⚠️ HEIC conversion failed for ${fileName}, trying direct sharp load (might be mislabeled)`);
          // If it fails, maybe it's just a mislabeled file (e.g. a JPEG with .HEIC extension)
          // Sharp might be able to handle it directly.
        }
      }

      const sharpInstance = sharp(buffer);
      const metadata = await sharpInstance.metadata();

      let pipeline = sharpInstance
        .rotate() // Auto-rotate based on EXIF
        .webp({ quality: 85 });

      if (metadata.width && metadata.width > 1920) {
        pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
      }

      await pipeline.toFile(webpPath);

      const newSize = fs.statSync(webpPath).size;
      totalSizeSaved += (originalSize - newSize);

      fs.unlinkSync(filePath);
      console.log(`✅ converted: ${fileName} → ${path.basename(webpPath)}`);
      convertedCount++;
    } catch (error) {
      console.error(`❌ failed: ${fileName}`, error);
      failedCount++;
    }
  }

  console.log('\n--- Conversion Summary ---');
  console.log(`Converted: ${convertedCount} images`);
  console.log(`Failed: ${failedCount} images`);
  console.log(`Skipped: ${skippedCount} images`);
  console.log(`Total size saved: ${(totalSizeSaved / 1024 / 1024).toFixed(2)} MB`);
}

convertImages().catch(console.error);
