#!/usr/bin/env node
import { Command } from 'commander';
import { initConfigFile } from './commands/init';
import { runDownloader } from './commands/run';

const program = new Command();

program
  .command('init')
  .description('Initialize the downloader config file')
  .action(initConfigFile);

program
  .command('run')
  .description('Download sources from the config file')
  .action(runDownloader);

program.parse(process.argv);
