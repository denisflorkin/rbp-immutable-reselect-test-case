import { shallow } from 'enzyme';
import React from 'react';
import {
  ProfilePage,
  // mapDispatchToProps // not really need to test as it does nothing actually
} from '../index';
import UserProfile from '../../../components/UserProfile';
// import expect from 'expect';
// import Link from '../../../components/Link'

const testUserData = {
  isFetching: false,
  error: false,
  userData: {
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
  },
}

describe('<ProfilePage />', () => {
  it('should render a div in all cases', () => {
    const renderedComponent = shallow(
      <ProfilePage userData={ false } />
    )
    expect(renderedComponent.find('div').length)
      .toEqual(1);
  });

  // test that it contains '<p>loading</p>' if userData == false
  it('should render \'loading\' in p tag if !userData', () => {
    const renderedComponent = shallow(
      <ProfilePage userData={ false } />
    )
    expect(renderedComponent.contains(<p>loading</p>))
      .toEqual(true);
  });

  // check that it has a child(UserProfile) if userData data are avilable
  it('should render <UserProfile /> if a valid profileData obj is passed', () => {
    const renderedComponent = shallow(
      <ProfilePage profileData={ testUserData.userData } />
    )
    expect(renderedComponent.contains(<UserProfile { ...testUserData.userData } />))
      .toEqual(true);
  });

  /*
  there are no method to map, only props.
  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        // const dispatch = expect.createSpy();
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUserName).toBeDefined();
      });
    });
  });
  */

  /*
  describe('getProfileSettingsLink method', () => {
    const userDataFix = false
    const profileDataFix = false
    describe('it should return an empty array if PROFILE data are not loaded yet', () => {
      const renderedComponent = shallow(<ProfilePage />)
      const getProfileSettingsLink =
        renderedComponent.instance().getProfileSettingsLink()

      expect(getProfileSettingsLink(userDataFix, profileDataFix)).toEqual([])
    })

    describe('it should return an empty array if LOGEDINUSER data are not loaded yet', () => {
      const renderedComponent = shallow(<ProfilePage />)
      const getProfileSettingsLink =
        renderedComponent.instance().getProfileSettingsLink()

      expect(getProfileSettingsLink(userDataFix, profileDataFix)).toEqual([])
    })
    describe('it should return a Link if userData.userID match profileData.userID ', () => {
      const renderedComponent = shallow(<ProfilePage />)
      // renderedComponent.instance().getProfileSettingsLink()
      const userDataFixture = { userID: 'foo' }
      const profileDataFixture = { userID: 'foo' }

      // call instance method
      renderedComponent.instance().getProfileSettingsLink(userDataFixture, profileDataFixture)

      expect(renderedComponent.contains(<Link />)).toEqual(true)
    })
  })
  */

  // it('should render edit my infos button appropriately', () => {
  //   expect(false).toEqual(true);
  // });

  // test if 'edit my infos btn' is rendered appropriately
});
