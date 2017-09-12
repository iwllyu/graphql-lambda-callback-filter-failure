import { GraphQLSchema } from 'graphql';
import { graphqlLambda } from 'graphql-server-lambda';
import { makeExecutableSchema } from 'graphql-tools';

export const myExpectedResult = 'myExpectedResult';

export const handleGraphQl = (event, context, cb): void => {
  const typeDefs = `
  type Author {
    id: Int!
  }

  type Query {
    author(id: Int!): Author
  }
`;
  
  const schema = makeExecutableSchema({ typeDefs });

  const callbackFilter = (error, output) => {
    cb(null, myExpectedResult);
  };

  graphqlLambda(
    (event, context) => {

      return {
        schema,
      };
    },
  )(event, context, callbackFilter);
};

export const handle = (event, context, cb): void => {
  cb(null, myExpectedResult);
};
