import * as path from 'path';
import * as winston from 'winston';
import winstonDailyRotateFile = require('winston-daily-rotate-file');
import { config } from '../config';

const transportsArray: any = [
  new winstonDailyRotateFile({
    filename: 'debitAllowance.log',
    dirname: path.join(__dirname, '../../logs/'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
  }),
  new (winston.transports.Console)({
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf(info => (`${info.timestamp} [${info.level.toUpperCase()}]: ${info.message ? JSON.stringify(info.message) : JSON.stringify(info)}`)),
      winston.format.colorize({
        all: true,
      }),
    ),
    level: 'debug',
  }),
];

const options: winston.LoggerOptions = {
  exitOnError: false,
  level: config.LOG_LEVEL || 'error',
  transports: transportsArray,
};

const logger: any = winston.createLogger(options);

export { logger };
