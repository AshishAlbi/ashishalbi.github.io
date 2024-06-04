import { copy } from 'fs-extra';

async function copyAssets() {
  try {
    await copy('src/assets', 'dist/assets');
    console.log('Assets copied successfully!');
  } catch (err) {
    console.error('Error copying assets:', err);
  }
}

copyAssets();