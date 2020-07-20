export interface IProfileInput {
  name: string;
  age: number;
  employeeId: number;
  hobbies: string[];
}
import { Util } from '../../utils/globalUtils';

export class ProfileService {
  public static async getProfile(): Promise<IProfileInput> {
    try {
      const data: IProfileInput = {
        name: 'Rishabh Jain',
        age: 27,
        employeeId: 1820,
        hobbies: ['Cricket', 'Blog Writing'],
      };
      await Util.timeout(2000);
      return data;
    } catch (e) {
      throw e;
    }
  }

  public static async addProfile(): Promise<any> {
    try {
      await Util.timeout(2000);
    } catch (e) {
      throw e;
    }
  }
}
