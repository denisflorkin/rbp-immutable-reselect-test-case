import { fromJS } from 'immutable';

import { selectProfileSettingsPageDomain } from '../selectors';


const fixture = fromJS({ p: 'v' })
const globalStateFix = fromJS({
  profileSettingsPage: fixture,
})
const selector = selectProfileSettingsPageDomain();

describe('selectProfileSettingsPageDomain', () => {
  it('should return the inital state', () => {
    expect(selector(globalStateFix)).toEqual(fixture);
  });
});
