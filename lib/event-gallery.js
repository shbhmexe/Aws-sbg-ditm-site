import { readdir } from 'node:fs/promises';
import path from 'node:path';

const PHOTO_FOLDERS = {
  cloudlaunch: '1st event images',
  'cloudlaunch-2': '2nd event images',
};

const IMAGE_EXTENSION = /\.(?:jpe?g|png|webp|avif|gif)$/i;
const naturalOrder = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

export async function getEventGalleryPhotos(event) {
  const folder = PHOTO_FOLDERS[event.slug];
  if (!folder) return [];

  let files;
  try {
    files = await readdir(path.join(process.cwd(), 'public', folder));
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSION.test(file))
    .sort(naturalOrder.compare)
    .map((file, index) => {
      const photoNumber = index + 1;
      return {
        src: `/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
        alt: `${event.title}, event photo ${photoNumber}`,
        title: `Photo ${String(photoNumber).padStart(2, '0')}`,
        caption: `A moment from ${event.title}.`,
      };
    });
}
