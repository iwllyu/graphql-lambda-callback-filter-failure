import 'mocha';
import { expect } from 'chai';
import { handle, handleGraphQl, myExpectedResult } from '../src';

describe('regular callback', () => {
  it('passes correctly with correct response', () => {
    handle({}, {}, (err, response) => {
      expect(response).to.equal(myExpectedResult);
    });
  });

  it('fails correctly with incorrect response', () => {
    handle({}, {}, (err, response) => {
      expect(response).to.equal('not' + myExpectedResult);
    });
  });
});


describe('graphql callback', () => {
  it('passes correctly with correct response', () => {
    handleGraphQl({}, {}, (err, response) => {
      expect(response).to.equal(myExpectedResult);
    });
  });

  it('SHOULD FAIL but passes with incorrect response with unhandled promise rejection', () => {
    handleGraphQl({}, {}, (err, response) => {
      expect(response).to.equal('not' + myExpectedResult);
    });
  });
});
