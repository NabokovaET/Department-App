import React, { useState } from 'react';
import './Department.scss';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import data from "../../json/EmployeeList.json";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Department = () => {

  const [add, setAdd] = useState<boolean>(false)

  const list: any = data.list;
  const departmentName = "IT отдел";

  const addEmployeeCard = () => {
    setAdd(!add)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#F35F51',
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="Department">
        <div className="Department__header">
          <h1>{departmentName}</h1>
          <Fab 
            size="medium" 
            color="primary" 
            onClick={addEmployeeCard}
          >
            <AddIcon />
          </Fab>
        </div>
        <EmployeeList 
          list={list}
          add={add}
          addEmployeeCard={addEmployeeCard}
        />
      </div>
    </ThemeProvider>
  );
}

export default Department;

