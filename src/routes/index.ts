import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();

const CURRENT_DIR = `${__dirname}`;
const cleanFileName = (filename: string) => {
  const cleanFile = filename.split('.').shift();
  return cleanFile;
};

readdirSync(CURRENT_DIR).forEach((file) => {
  if (file === 'index.ts') return;
  import(`./${cleanFileName(file)}.route`).then((moduleRouter) => {
    router.use(`/${cleanFileName(file)}`, moduleRouter.default);
  });
});

export default router;
