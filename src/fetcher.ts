import fs from 'fs-extra';
import axios from 'axios';
import path from 'path';
import inquirer from 'inquirer';

export interface Source {
  name: string;
  url: string;
}

export interface Config {
  outputPath: string;
  sources: Source[];
}

export const downloadSource = async (source: Source, outputPath: string) => {
  try {
    const filePath = path.join(outputPath, source.name);

    // Check if the file exists and ask for user confirmation
    if (fs.existsSync(filePath)) {
      const answer = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'replace',
          message: `File ${source.name} already exists. Do you want to replace it?`,
          default: false,
        },
      ]);
      if (!answer.replace) {
        console.log(`Skipping ${source.name}...`);
        return;
      }
    }

    // Download the file
    const response = await axios.get(source.url, { responseType: 'arraybuffer' });
    fs.ensureDirSync(outputPath); // Make sure the output directory exists
    fs.writeFileSync(filePath, response.data);
    console.log(`Downloaded and saved ${source.name} to ${filePath}`);
  } catch (error) {
    console.error(`Error downloading ${source.name}:`, error);
  }
};
