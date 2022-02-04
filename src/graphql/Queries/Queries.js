import { gql } from "@apollo/client";

export const GET_DEPARTMENT_LIST = gql`
  query getDepartmentList($departmentId: String!) {
    getDepartmentList(departmentId: $departmentId) {
      id
      name
      description
    }
  }
`;





