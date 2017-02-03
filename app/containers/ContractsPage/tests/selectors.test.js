import { fromJS } from 'immutable';

import {
  selectContractsPageDomain,
  makeSelectContracts,
  makeSelectIsFetching,
  makeSelectError,
} from '../selectors';


const domainSelector = selectContractsPageDomain();

const initialContractsStateFixture = fromJS({
  contracts: false,
  isFetching: false,
  error: false,
})

const mockedGlobalState = fromJS({
  contractsPage: initialContractsStateFixture,
});

describe('domainSelector', () => {
  it('should select the ContractsPage state', () => {
    expect(domainSelector(mockedGlobalState))
      .toEqual(initialContractsStateFixture);
  });

  describe('contractsSelector', () => {
    it('it should select the contracts', () => {
      const selector = makeSelectContracts()

      const contractsFix = [{ some: 'stuff', someother: 'stuff' }]
      const contractsStateFixture = fromJS({
        contracts: contractsFix,
      })

      const mockedState = fromJS({
        contractsPage: contractsStateFixture,
      });

      expect(selector(mockedState))
      // expect(selector(mockedState).toJS()) // this make the test pass but its weird, where is the toJS call hapening in the actual app code ?
        .toEqual(contractsFix)
    })
  })

  describe('isFetchingSelector', () => {
    it('it should select the isFetching value', () => {
      const selector = makeSelectIsFetching()

      const isFetchingFix = false
      const contractsStateFixture = fromJS({
        isFetching: isFetchingFix,
      })

      const mockedState = fromJS({
        contractsPage: contractsStateFixture,
      });

      expect(selector(mockedState))
        .toEqual(isFetchingFix)
    })
  })

  describe('errorSelector', () => {
    it('it should select the error value', () => {
      const selector = makeSelectError()

      const errorFix = { some: 'error' }
      const contractsStateFixture = fromJS({
        error: errorFix,
      })

      const mockedState = fromJS({
        contractsPage: contractsStateFixture,
      });

      expect(selector(mockedState))
      expect(selector(mockedState).toJS()) // this make the test pass but its weird, where is the toJS call hapening in the actual app code ?
        .toEqual(errorFix)
    })
  })
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
