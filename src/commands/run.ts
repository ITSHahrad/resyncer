// src/commands/run.ts
import fs from 'fs-extra';
import path from 'path';
import { downloadSource, Config } from '../fetcher';

export const runDownloader = async () => {
  const configPath = path.resolve(process.cwd(), 'resyncer.config.json'); // 🔁 ROOT path

  if (!fs.existsSync(configPath)) {
    console.log('❌ Config file not found. Please run "resyncer init" first.');
    return;
  }

  const config: Config = fs.readJsonSync(configPath);

  for (const source of config.sources) {
    await downloadSource(source, config.outputPath);
  }
};
