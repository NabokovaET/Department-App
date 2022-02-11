import React, { useState, useEffect } from 'react';
import { Grid, Input, Box, Button, Select, MenuItem, InputLabel, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CREATE_POSITION } from "../../graphql/Mutation/Mutation";
import { useMutation } from "@apollo/client";

const theme = createTheme({
  palette: {
    primary: {
      main: '#EFEFEF',
    },
    secondary: {
      main: '#243A7E',
    },
  }
});

const EmployeeForm = ({refetch, addEmployee, addEmployeeCard, updateEmployee, setEdit, positions, edit, item, employeesQuantity, idDepartment} : 
  {refetch?: Function, addEmployee?: Function, addEmployeeCard?: Function, updateEmployee?: Function, setEdit?: Function, positions?: any[], edit?: boolean, item?: any, employeesQuantity?: number, idDepartment?: number}) => {

  const formData = edit 
    ? {...item, position: ''}
    : {name: '', surname: '', email: '', age: '', position: ''} 


  const [formValue, setFormValue] = useState(formData);
  const [addPosition, setAddPosition] = useState(false);
  const [newPosition, setNewPosition] = useState(positions);
  const [ createPosition, { data: createPos } ] = useMutation(CREATE_POSITION);


  useEffect(()=> {
    if(createPos) {
      setNewPosition(createPos);
    }
  })

  const position = newPosition && newPosition.map((position) => {
    return (
      <MenuItem 
        key={position.id}
        value={position.id}
      >
        {position.title}
      </MenuItem>
    )
  });

  const handleChange = (e: any) => {
    setFormValue({
      ...formValue, 
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (edit && formValue) {
      updateEmployee && updateEmployee({ 
        variables: { 
          input: { 
            id: item.id,
            name: formValue.name, 
            surname: formValue.surname,
            email: formValue.email, 
            age: Number(formValue.age),
            positionId: formValue.position,
          }, 
        }
      }).then(refetch);
      setEdit && setEdit(false);
    }
  
    if (!edit && formValue) {
      addEmployee && addEmployee({ 
        variables: { 
          input: { 
            name: formValue.name, 
            surname: formValue.surname,
            email: formValue.email, 
            age: Number(formValue.age),
            positionId: formValue.position,
          }, 
        }
      }).then(refetch);
      addEmployeeCard && addEmployeeCard();
    }

    if (addPosition && formValue) {
      createPosition ({
        variables: {
          input: {
            title: formValue.position,
            departmentId: idDepartment
          }
        }
      });
      setAddPosition(false)
    }

  }

  return (
    <ThemeProvider theme={theme}>
        <Box sx={styleBox}>
            <form onSubmit={handleSubmit}>
                <Grid container direction='column'rowSpacing={3}>
                    <Grid item xs={12} md={6}>   
                      <Input 
                        name='name'
                        placeholder="Имя сотрудника"
                        value={formValue.name} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input 
                        name='surname'
                        placeholder="Фамилия сотрудника" 
                        value={formValue.surname} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input 
                        type='email'
                        name='email'
                        placeholder="Email" 
                        value={formValue.email} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input 
                        type='number'
                        name='age'
                        placeholder="Возраст" 
                        value={formValue.age} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>Должность</InputLabel>
                      {
                        !newPosition
                          ? <Fab 
                              size="medium" 
                              color="primary" 
                              onClick={() => setAddPosition(!addPosition)}
                            >
                              <AddIcon />
                            </Fab>                          
                          :  <Select
                              name='position'
                              label="Должность"
                              value={formValue.position} 
                              onChange={handleChange}
                              fullWidth={true}
                            >
                              {position}
                            </Select>
                      }
                      {
                        addPosition
                          ? <Input 
                              type='position'
                              name='position'
                              value={formValue.position} 
                              onChange={handleChange}
                              fullWidth={true}
                            />
                          : null
                      }
                    </Grid>
                    <Grid item xs={12} md={6} alignSelf="flex-end">
                      <Button 
                        type='submit'
                        variant="outlined" 
                        size="medium" 
                        color='primary'
                      >
                        {edit ? 'Сохранить' : 'Добавить'}
                      </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </ThemeProvider>
  );
}

export default EmployeeForm;


// ---------- MUI Style ---------- //

const styleBox = {
  display: 'flex',
  flexDirection: { xs: 'column'},
  alignItems: 'left',
  color: 'primary.main',
  bgcolor: 'secondary.main',
  overflow: 'hidden',
  borderRadius: '12px',
  boxShadow: 1,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  padding: '1rem',
  margin: '1rem'
}