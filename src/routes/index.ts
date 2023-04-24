import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();

const CURRENT_DIR = `${__dirname}`;
export const cleanFileName = (filename?: string) => {
  if (typeof filename !== 'string')
    throw new Error('Filename must be a string');
  const [cleanFile] = filename?.split?.('.');
  return cleanFile;
};

readdirSync(CURRENT_DIR).forEach((file) => {
  if (file === 'index.ts') return;
  import(`./${cleanFileName(file)}.route`).then((moduleRouter) => {
    router.use(`/${cleanFileName(file)}`, moduleRouter.default);
  });
});

export default router;
