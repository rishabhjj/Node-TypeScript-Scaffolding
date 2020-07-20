import HttpStatus from 'http-status-codes';
import createError from 'http-errors';
import { config } from '../config';
import { validate } from 'joi';

export interface IResponseStatus {
  code: number;
  message: string;
}

interface ICreateResponseData {
  status?: IResponseStatus;
  result?: any;
}

interface ILimitOffset {
  limit: number;
  offset: number;
  pageNum: number;
}

export class Util {
  public static getResponseStatus(httpStatus?: number, text?: string): IResponseStatus {
    const code = httpStatus || HttpStatus.OK;
    const message = text || HttpStatus.getStatusText(code);
    return {
      code,
      message,
    };
  }

  public static createResponse(status: IResponseStatus, data: any): ICreateResponseData {
    const response: ICreateResponseData = {};
    response.status = status;
    response.result = data;
    return response;
  }

  public static sendResponse(message: string): ICreateResponseData {
    const status = this.getResponseStatus(HttpStatus.OK, message);
    const response = this.createResponse(status, null);
    return response;
  }

  public static getError(httpStatus: number, error: string) {
    return createError(httpStatus, error);
  }
  public static timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public static joiValidator(body: any, schema: any)  {
    try {
      const result = validate(body, schema);
      if (result.error) {
        throw result.error.details[0].message;
      }
    } catch (e) {
      throw e;
    }
  }
  public static getLimitOffset(queryParams: any): ILimitOffset {
    try {
      let { pageNum, pageSize } = queryParams;
      pageNum = Number(pageNum) || config.pageNum;
      pageSize = Number(pageSize) || config.pageSize;
      const offset = (pageNum - 1) * pageSize;
      const limit = pageNum * pageSize;
      return { limit, offset, pageNum };
    } catch (e) {
      throw e;
    }
  }
}
