import { shallow } from 'enzyme';
import React from 'react';
import UserProfile from 'components/UserProfile';
import Link from 'components/Link'

import {
  ProfilePage,
  mapDispatchToProps
} from '../index';


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

  describe('mapDispatchToProps', () => {
    it('shoulld return and empty object', () => {
      const ret = mapDispatchToProps()

      expect(ret).toEqual({})
    })
  })

  describe('getProfileSettingsLink method', () => {
    const userDataFix = false
    const profileDataFix = false

    const renderedComponent = shallow(<ProfilePage />)
    const getProfileSettingsLink =
      renderedComponent.instance().getProfileSettingsLink

    it('should return an empty array if PROFILE data are not loaded yet', () => {
      // const renderedComponent = shallow(<ProfilePage />)
      // const getProfileSettingsLink =
      //   renderedComponent.instance().getProfileSettingsLink()

      expect(getProfileSettingsLink(userDataFix, profileDataFix)).toEqual([])
    })

    it('it should return an empty array if LOGEDINUSER data are not loaded yet', () => {
      // const renderedComponent = shallow(<ProfilePage />)
      // const getProfileSettingsLink =
      //   renderedComponent.instance().getProfileSettingsLink()

      expect(getProfileSettingsLink(userDataFix, profileDataFix)).toEqual([])
    })

    it('should return a Link if userData.userID match profileData.userID ', () => {
      // const renderedComponent = shallow(<ProfilePage />)
      // renderedComponent.instance().getProfileSettingsLink()
      const userDataFixture = { userID: 'foo' }
      const profileDataFixture = { userID: 'foo' }

      // call instance method
      const result = getProfileSettingsLink(userDataFixture, profileDataFixture)

      // expect(getProfileSettingsLink(userDataFixture, profileDataFixture))
      expect(result)
        .toEqual(<Link to="/profile-settings" >EDIT</Link>)
    })
  })
});
