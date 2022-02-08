import { gql } from "@apollo/client";

export const GET_DEPARTMENT_LIST = gql`
  query getDepartmentList {
    departments {
      id
      title
      description
    }
  }
`;

export const GET_EMPLOYEE_LIST = gql`
  query getEmployeeList {
    getEmployeeList {
      id
      firstName
      lastName
      email
      age
      posithion
    }
  }
`;





