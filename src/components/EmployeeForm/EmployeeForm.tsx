import React, { useState } from 'react';
import { Grid, Input, Box, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from "@apollo/client";
import { ADD_EMPLOYEE } from "../../graphql/Mutation/Mutation";

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

const EmployeeForm = ({refetch, addEmployeeCard, edit, item} : {refetch?: Function, addEmployeeCard?: Function, edit?: boolean, item?: any}) => {

  const [formValue, setFormValue] = useState({firstName: '', lastName: '', email: '', age: '', position: ''});
  const [ addEmployee, { data: newData } ] = useMutation(ADD_EMPLOYEE);

  const handleChange = (e: any) => {
    setFormValue({
      ...formValue, 
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormValue({firstName: '', lastName: '', email: '', age: '', position: ''})
    
    if (formValue) {
      addEmployee({ 
        variables: { 
          input: { 
            firstName: formValue.firstName, 
            lastName: formValue.lastName,
            email: formValue.email, 
            age: formValue.age,
            posithion: formValue.position,
          }, 
        }
      });
      refetch && refetch();
      addEmployeeCard && addEmployeeCard();
    }
  }
  console.log(item.firstName)

  // if(edit) {
  //   setFormValue({
  //     firstName: item.firstName, 
  //     lastName: item.lastName,
  //     email: item.email, 
  //     age: item.age,
  //     position: item.position,
  //   });
  // }

  return (
    <ThemeProvider theme={theme}>
        <Box sx={styleBox}>
            <form onSubmit={handleSubmit}>
                <Grid container direction='column'rowSpacing={3}>
                    <Grid item xs={12} md={6}>   
                      <Input 
                        name='firstName'
                        placeholder="Имя сотрудника"
                        value={edit ? item.firstName : formValue.firstName} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input 
                        name='lastName'
                        placeholder="Фамилия сотрудника" 
                        value={edit ? item.lastName : formValue.lastName} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input 
                        name='email'
                        placeholder="Email" 
                        value={edit ? item.email : formValue.email} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input 
                        name='age'
                        placeholder="Возраст" 
                        value={edit ? item.age : formValue.age} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input 
                        name='posithion'
                        placeholder="Должность" 
                        value={edit ? item.position : formValue.position} 
                        onChange={handleChange}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} alignSelf="flex-end">
                      <Button 
                        type='submit'
                        variant="outlined" 
                        size="medium" 
                        color='primary'
                        >
                        Добавить
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