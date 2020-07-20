import sinon from 'sinon';
import * as assert from 'assert';
import { describe, it, xit, afterEach } from 'mocha';
import { ProfileService } from '../api/service/ProfileService';
import { Util } from '../utils/globalUtils';

describe('HelperService Test Cases', () => {
  // tslint:disable-next-line: ter-arrow-parens
  afterEach((done: () => void) => {
    sinon.restore();
    done();
  });
  it('#fetchProfileData - Fetch Profile Data', async () => {
    const expectedOutput = {
      name: 'Rishabh Jain',
      age: 27,
      employeeId: 1820,
      hobbies: [
        'Cricket',
        'Blog Writing',
      ],
    };
      // We can use this as db call in our projects
    sinon.stub(Util, 'timeout')
      .callsFake(async () => {
        return;
      });
    const spyFunc = sinon.spy(ProfileService.getProfile);
    const spyValidationResult = await spyFunc();
    assert.equal(JSON.stringify(spyValidationResult), JSON.stringify(expectedOutput), 'Failed Fetching of Profile Data');
  });

  it('#addProfileData - Adding Profile Data', async () => {
    sinon.stub(Util, 'timeout')
        .callsFake(async () => {
          return;
        });
    const spyFunc = sinon.spy(ProfileService.addProfile);
    const spyValidationResult = await spyFunc();
    assert.equal(JSON.stringify(spyValidationResult), JSON.stringify(undefined), 'Failed Fetching of Profile Data');
  });

});
