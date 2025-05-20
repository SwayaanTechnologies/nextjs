import { gql } from '@apollo/client';

export const FETCH_DATA = gql`
  query FetchData {
    users {
      id
      name
      email
    }
    blogs {
      id
      title
      author {
        name
      }
    }
    products {
      id
      name
      price
    }
  }
`;
