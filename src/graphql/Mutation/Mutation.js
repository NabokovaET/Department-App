import { gql } from "@apollo/client";

export const ADD_DEPARTMENT = gql`
  mutation addDepartment($input: CreateDepartmentInput!) {
    createDepartment(createDepartmentInput: $input) {
      id 
      title
      description
    }
  }
`;  

export const DELETE_DEPARTMENT = gql`
  mutation deleteDepartment($departmentId: Float!) {
    removeDepartment(id: $departmentId)
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


export const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($userId: String!) {
    deleteEmployee(userId: $userId) {
      id
      firstName
    }
  }
`;  
