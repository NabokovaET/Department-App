import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import './EmployeeList.scss';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import { EmployeeInterface } from '../../interfaces/interfaces';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "../../graphql/Mutation/Mutation";
import { GET_DEPARTMENT } from "../../graphql/Queries/Queries";
import { useQuery, useMutation } from "@apollo/client";


const EmployeeList = ({idDepartment, add, addEmployeeCard} : 
  {idDepartment: number, add: boolean, addEmployeeCard: Function}) => {
  
  const { data, refetch } = useQuery(GET_DEPARTMENT, {variables: { id: idDepartment }});
  const [ listEmployee, setlistEmployee ] = useState<EmployeeInterface[]>([]);
  const [ listPosition, setlistPosition ] = useState<any[]>([]);
  const [ employeesQuantity, setEmployeesQuantity ] = useState();
  const [ addEmployee, { data: addData } ] = useMutation(ADD_EMPLOYEE, {refetchQueries: [GET_DEPARTMENT]});
  const [ deleteEmployee, { data: deleteData } ] = useMutation(DELETE_EMPLOYEE, {refetchQueries: [GET_DEPARTMENT]});
  const [ updateEmployee, { data: updateData } ] = useMutation(UPDATE_EMPLOYEE, {refetchQueries: [GET_DEPARTMENT]});

  useEffect(()=> {
    if(data) {
      setlistEmployee(data.department.employees);
      setlistPosition(data.department.positions);
      setEmployeesQuantity(data.department.employeesQuantity);
    }
    if(addData) {
      refetch();
    }
    if(deleteData) {
      refetch();
    }
    if(updateData) {
      refetch();
    }
  })

  const items = listEmployee.map((item) => {
    return (
      <EmployeeItem
        key={item.id}
        item={item}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
        positions={listPosition}
      />
    )
  });

  return (
    add 
      ? <>
          <ul className="EmployeeList">
            <Grid container>
              <Grid item xs={12} md={6} minHeight='auto'>
                <li className="EmployeeItem">
                  <EmployeeForm 
                    refetch={refetch}
                    addEmployee={addEmployee}
                    addEmployeeCard={addEmployeeCard}
                    positions={listPosition}
                    employeesQuantity={employeesQuantity}
                    idDepartment={idDepartment}
                  />
                </li>              
              </Grid>
              {items}
            </Grid>
          </ul>
        </> 
      : <ul className="EmployeeList">
          <Container>
            <Grid container >
              {items}
            </Grid>
          </Container>
        </ul>
  );
}

export default EmployeeList;
