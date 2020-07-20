import { Response, NextFunction } from 'express';
import { IRequest } from '../../interface/RequestInterface';
import { BaseController } from './BaseController';
import HttpStatus from 'http-status-codes';
import { ResponseMessage } from '../../utils/ResponseMessage';
import { ProfileService } from '../service/ProfileService';
import { Util } from '../../utils/globalUtils';
import { profileData } from '../joiSchema/Profile';

/**
 * Class containing Controllers Specific to Profile Module
 */
export class ProfileController extends BaseController {
  public static async getProfile(req: IRequest, res: Response, next: NextFunction): Promise<any> {
    try {
      const data = await ProfileService.getProfile();
      const status = Util.getResponseStatus(HttpStatus.OK);
      const response = Util.createResponse(status, data);
      return res.status(HttpStatus.OK).send(response);
    } catch (e) {
      return next(e);
    }
  }
  public static async addProfile(req: IRequest, res: Response, next: NextFunction): Promise<any> {
    try {
      const data = req.body;
      Util.joiValidator(data, profileData);
      await ProfileService.addProfile();
      const result = Util.sendResponse(ResponseMessage.PROFILE_ADD_SUCCESS);
      return res.send(result).status(HttpStatus.CREATED);
    } catch (e) {
      return next(e);
    }
  }
}
