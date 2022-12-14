import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CreateUser($phone: String!, $email: String!, $password: String!, $name: String!) {
  createUser(phone: $phone, email: $email, password: $password, name: $name) {
    id
  }
}
`;

export const DELETE_USER = gql`
  mutation deleteUser($deleteUser: String!) {
    deleteUser(id: $deleteUser)
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($phone: String!, $email: String!, $password: String!, $name: String!, $id: String!){
    updateUser(phone: $phone, email: $email, password: $password, name: $name, id: $id) 
  } 
`;