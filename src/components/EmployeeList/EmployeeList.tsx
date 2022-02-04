import React from 'react';
import { Container, Grid } from '@mui/material';
import './EmployeeList.scss';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import { EmployeeInterface } from '../../interfaces/interfaces'

const EmployeeList = ({list} : {list: EmployeeInterface[]}) => {

  const items = list.map((item) => {
    return (
      <EmployeeItem
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="EmployeeList">
      <Container>
        <Grid container >
          {items}
        </Grid>
      </Container>
    </div>
  );
}

export default EmployeeList;

