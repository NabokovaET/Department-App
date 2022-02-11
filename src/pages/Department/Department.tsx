import React, { useState } from 'react';
import './Department.scss';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useParams} from 'react-router-dom';

const Department = () => {

  const {id, title} = useParams();
  const idDepartment = Number(id);

  const [add, setAdd] = useState<boolean>(false)

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
          <h1>{title}</h1>
          <Fab 
            size="medium" 
            color="primary" 
            onClick={addEmployeeCard}
          >
            <AddIcon />
          </Fab>
        </div>
        <EmployeeList 
          idDepartment={idDepartment}
          add={add}
          addEmployeeCard={addEmployeeCard}
        />
      </div>
    </ThemeProvider>
  );
}

export default Department;

