import { fromJS } from 'immutable';
import
  selectProfileData,
  {
    selectGlobalDomain,
    selectProfilePageDomain,
  }
  from '../selectors';


const testUserData = {
  userID: 'eHRSQHqergrz8tyjQetyjEtyry8G4P3',
  username: 'Willis Bruce Gerkler',
  level: 'FREESPRO',
  avatarURL: 'https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png',
  infos: {
    email: 'some@mail.df',
    street: 'somestreet',
    number: 123,
    city: 'someCity',
    zipcode: 34595,
    phonenumber: '555555555',
    phonenumber2: '6666666666',
  },
}

describe('selectProfileData', () => {
  const selector = selectProfileData();

  it('should select the userData from the profileData domain', () => {
    const mockedState = fromJS({
      profilePage: testUserData,
    });
    expect(selector(mockedState))
      .toEqual(testUserData.userData);
  });
});

describe('selectGlobalDomain', () => {
  const selector = selectGlobalDomain();

  it('should select the global domain', () => {
    const globalData = fromJS({
      foo: 'foo',
      bar: 'bar',
      zaa: 'zaa',
    });
    const mockedState = fromJS({
      global: globalData,
    });
    expect(selector(mockedState)).toEqual(globalData);
  });
});

describe('selectProfilePageDomain', () => {
  const selector = selectProfilePageDomain();

  it('should select the profilePage Domain', () => {
    const mockedState = fromJS({
      profilePage: testUserData,
    });

    const testUserDataImmu = fromJS(testUserData);

    expect(selector(mockedState))
      .toEqual(testUserDataImmu);
  });
});
