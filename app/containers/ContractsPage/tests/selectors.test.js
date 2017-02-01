import { fromJS } from 'immutable';

import // makeSelectContracts,
{
  selectContractsPageDomain,
}
from '../selectors';


// const selector = makeSelectContracts();
const domainSelector = selectContractsPageDomain();


describe('domainSelector', () => {
  it('should select the home state', () => {
    const initialContractsStateFixture = fromJS({
      contracts: false,
      isFetching: false,
      error: false,
    })

    const mockedState = fromJS({
      contracts: initialContractsStateFixture,
    });
    expect(domainSelector(mockedState))
      .toEqual(initialContractsStateFixture);
  });
});

// describe('makeSelectUsername', () => {
//   const usernameSelector = makeSelectUsername();
//   it('should select the username', () => {
//     const username = 'mxstbr';
//     const mockedState = fromJS({
//       home: {
//         username,
//       },
//     });
//     expect(usernameSelector(mockedState)).toEqual(username);
//   });
// });
