# The Problem

Failures in the callback via graphqlLambda callbackFilter do not fail, instead reject with a promise. 

# Quick start

Test file is in src/index.test.ts

1. npm i
2. npm test
3. observe results

console output
```
  regular callback
    ✓ passes correctly with correct response
    1) fails correctly with incorrect response

  graphql callback
    ✓ passes correctly with correct response
    ✓ SHOULD FAIL but passes with incorrect response with unhandled promise rejection
(node:62394) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): AssertionError: expected 'myExpectedResult' to equal 'notmyExpectedResult'
```
