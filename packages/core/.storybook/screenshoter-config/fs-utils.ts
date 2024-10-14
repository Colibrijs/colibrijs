import fs from 'node:fs/promises';
import path from 'node:path';

export const fsUtils = {
  getPath(...paths: string[]): string {
    return path.resolve(...paths);
  },

  async getDirectoryAvailability(dir: string): Promise<boolean> {
    try {
      const data = await fs.lstat(dir);
      if (data.isDirectory()) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  },

  async createDirectory(dirPath: string): Promise<void> {
    await fs.mkdir(dirPath);
  },

  async removeDirectory(pathToDir: string): Promise<void> {
    await fs.rm(pathToDir, { recursive: true });
  },

  async createBinaryFile(filename: string, image: Buffer): Promise<void> {
    await fs.writeFile(filename, image, 'binary');
  },
};
