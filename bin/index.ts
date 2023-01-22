#! /usr/bin/env node
import { program } from 'commander';
import packageJson from '../package.json';

program.name('cli').description('cli tools').version(packageJson.version, '-v, --version');

program.parse(process.argv);
