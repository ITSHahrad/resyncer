// src/commands/init.ts
import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';

export const initConfigFile = async () => {
  const configPath = path.resolve(process.cwd(), 'downloader.config.json'); // 🔁 ROOT path

  if (fs.existsSync(configPath)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'A config file already exists. Overwrite it?',
        default: false,
      },
    ]);
    if (!overwrite) {
      console.log('Aborted. Existing config retained.');
      return;
    }
  }

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'outputPath',
      message: 'Enter the output path for resources:',
      default: './src/resources',
    },
    {
      type: 'input',
      name: 'sources',
      message: 'Enter the sources (JSON array of { name, url }):',
      default: '[{"name": "example.txt", "url": "https://example.com/file.txt"}]',
    },
  ]);

  const config = {
    outputPath: answers.outputPath,
    sources: JSON.parse(answers.sources),
  };

  fs.writeJsonSync(configPath, config, { spaces: 2 });
  console.log(`✅ Config file created at: ${configPath}`);
};
