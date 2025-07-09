import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
`);
console.log(logSymbols.success, chalk.green.italic('Finished successfully!'));
console.log(logSymbols.error, chalk.red.italic('Error!'));