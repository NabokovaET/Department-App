import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import './EmployeeList.scss';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import { useQuery } from "@apollo/client";
import { EmployeeInterface } from '../../interfaces/interfaces';
import { GET_EMPLOYEE_LIST } from "../../graphql/Queries/Queries";
import EmployeeForm from '../EmployeeForm/EmployeeForm';

const EmployeeList = ({list, add, addEmployeeCard} : {list: EmployeeInterface[], add: boolean, addEmployeeCard: Function}) => {

  const { data, refetch } = useQuery(GET_EMPLOYEE_LIST);
  const [listEmployee, setlistEmployee] = useState(list);

  if(data) {
    setlistEmployee(data);
  }

  const items = listEmployee.map((item) => {
    return (
      <EmployeeItem
        key={item.id}
        item={item}
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
                    addEmployeeCard={addEmployeeCard}
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
