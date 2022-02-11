import { gql } from "@apollo/client";

export const GET_DEPARTMENT_LIST = gql`
  query getDepartmentList {
    departments {
      id
      title
      description
      employeesQuantity
    }
  }
`;

export const GET_DEPARTMENT = gql`
  query getDepartment($id: Int!)  {
    department(id: $id)  {
      id
      title
      description
      employeesQuantity
      positions {
        id
				title
      }
      employees {
        id 
        name
        surname
        email
        age
        position {
          title
        }
      }
    }
  }
`;

// export const GET_EMPLOYEE_LIST = gql`
//   query getEmployeeList($id: Int!)  {
//     employeesFromDepartment(id: $id) {
//       id
//       name
//       surname
//       email
//       age
//       position{
//         title,
//         department{
//           title
//         }
//       }
// 		}
//   }
// `;




