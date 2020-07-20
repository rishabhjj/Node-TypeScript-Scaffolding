import { Request, Response, NextFunction } from 'express';
import { logger } from './log';
import { IRequest } from '../interface/RequestInterface';
const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line no-unused-vars
export const error = (err: any, req: IRequest, res: any, next: NextFunction) => {
  const code = err.status || 500;
  const response: any = {
    error: err.message || err,
    stack: err.stack ? err.stack.split('\n') : '',
  };

  if (err.data) {
    response.data = err.data;
  }
  if (err.wrong_data) {
    response.wrong_data = err.wrong_data;
  }
  if (err.url) {
    response.url = err.url;
  }

  if (err.error_code) {
    response.error_code = err.error_code;
  }
  logger.error(`ERROR Handler: ${err.message}`);
  logger.debug(response.stack);

  if (env.toLowerCase() === 'production') {
    if (code === 500) {
      response.error = 'An unexpected error has occured';
    }
    response.stack = undefined;
  }
  delete response.stack;
  res.status(code).json(response);
};
