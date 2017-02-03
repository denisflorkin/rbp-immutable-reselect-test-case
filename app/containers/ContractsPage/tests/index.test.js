import React from 'react';
import { shallow } from 'enzyme';

import { ContractsPage, mapDispatchToProps } from '../index';

// import { mapDispatchToProps } from '../index'

// describe('<ContractsPage />', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });

describe('<ContractsPage />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <ContractsPage />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  describe('mapDispatchToProps', () => {
    it('shoulld return and empty object', () => {
      const ret = mapDispatchToProps()

      expect(ret).toEqual({})
    })
  })
});
