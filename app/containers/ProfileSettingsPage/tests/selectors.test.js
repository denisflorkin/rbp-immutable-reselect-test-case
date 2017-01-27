import { fromJS } from 'immutable';

import selectProfileSettingsPageDomain,
{
  selectProfileSettingsPage,
  // selectUserData,
  selectError,
  selectIsFetching,
  selectSuccessResponse,
  selectRequestedSettingUpdateName,
  selectRequestedSettingUpdateValue,
} from '../selectors'


const initialStateFixture = {
  isFetching: false,
  requestedSettingUpdateName: false,
  requestedSettingUpdateValue: false,
  error: false,
  successResponse: false,
}

const initialStateMapFixture = fromJS(initialStateFixture)

const globalStateFix = fromJS({
  profileSettingsPage: initialStateFixture,
})

describe('<ProfileSettingsPage /> Domain selectors', () => {
  describe('selectProfileSettingsPageDomain', () => {
    it('should return the inital state as a Map', () => {
      const selector = selectProfileSettingsPageDomain();
      expect(selector(globalStateFix)).toEqual(initialStateMapFixture);
    });
  });

  describe('selectProfileSettingsPage', () => {
    it('should return the inital state', () => {
      const selector = selectProfileSettingsPage();
      expect(selector(globalStateFix)).toEqual(initialStateFixture);
    });
  });

  describe('selectError', () => {
    it('should return the error prop', () => {
      // const profileSettingsPageDomain = selectProfileSettingsPageDomain()
      const selector = selectError();
      const fixture = new Error('some err mesg')
      const mockedState = fromJS({
        profileSettingsPage: { error: fixture },
      })

      expect(selector(mockedState))
        .toEqual(fixture);
    });
  });

  describe('selectIsFetching', () => {
    it('should return the error prop', () => {
      // const profileSettingsPageDomain = selectProfileSettingsPageDomain()
      const selector = selectIsFetching();

      // should be a bool but this makes test more explicit
      const fixture = 'fixValue'

      const mockedState = fromJS({
        profileSettingsPage: { isFetching: 'fixValue' },
      })

      expect(selector(mockedState))
        .toEqual(fixture);
    });
  });

  describe('selectSuccessResponse', () => {
    it('should return the error prop', () => {
      // const profileSettingsPageDomain = selectProfileSettingsPageDomain()
      const selector = selectSuccessResponse();

      // should be a bool but this makes test more explicit
      const fixture = 'fixValue'

      const mockedState = fromJS({
        profileSettingsPage: { successResponse: 'fixValue' },
      })

      expect(selector(mockedState))
        .toEqual(fixture);
    });
  });

  describe('selectRequestedSettingUpdateName', () => {
    it('should return the error prop', () => {
      // const profileSettingsPageDomain = selectProfileSettingsPageDomain()
      const selector = selectRequestedSettingUpdateName();

      // should be a bool but this makes test more explicit
      const fixture = 'fixValue'

      const mockedState = fromJS({
        profileSettingsPage: { requestedSettingUpdateName: 'fixValue' },
      })

      expect(selector(mockedState))
        .toEqual(fixture);
    });
  });

  describe('selectRequestedSettingUpdateValue', () => {
    it('should return the error prop', () => {
      // const profileSettingsPageDomain = selectProfileSettingsPageDomain()
      const selector = selectRequestedSettingUpdateValue();

      // should be a bool but this makes test more explicit
      const fixture = 'fixValue'

      const mockedState = fromJS({
        profileSettingsPage: { requestedSettingUpdateValue: 'fixValue' },
      })

      expect(selector(mockedState))
        .toEqual(fixture);
    });
  });
});
