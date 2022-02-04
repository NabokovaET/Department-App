import { gql } from "@apollo/client";

export const ADD_DEPARTMENT = gql`
  mutation addDepartment($input: DepartmentInput!) {
    addDepartment(input: $input) {
        id 
        name
        description
    }
  }
`;  

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($userId: String!, $input: EmployeeInput!) {
    addEmployee(userId: $userId, input: $input) {
        id
        firstName
        lastName
        email
        age
        position
        department
    }
  }
`;  
