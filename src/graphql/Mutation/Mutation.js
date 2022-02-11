import { gql } from "@apollo/client";

export const ADD_DEPARTMENT = gql`
  mutation addDepartment($input: CreateDepartmentInput!) {
    createDepartment(input: $input) {
      id 
      title
      description
    }
  }
`;  

export const DELETE_DEPARTMENT = gql`
  mutation deleteDepartment($departmentId: Int!) {
    removeDepartment(id: $departmentId)
  }
`;  

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      id
      name
      surname
      email
      age
    }
  }
`;  

export const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($userId: Int!) {
    removeEmployee(id: $userId) 
  }
`;  

export const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($input: UpdateEmployeeInput!) {
    updateEmployee(input: $input)
    {
      id
      name
      surname
      email
      age
      position {
        id
        title
      }
    }
  }
`;  

export const CREATE_POSITION = gql`
  mutation createPosition($input: CreatePositionInput!) {
    createPosition(input: $input)
    {
      id
      title
      description
    }
  }
`

