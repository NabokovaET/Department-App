import React, { useEffect, useState } from 'react';
import { Grid, Input, Box, Button } from '@mui/material';
import './DepartmentCardList.scss';
import DepartmentCard from '../DepartmentCard/DepartmentCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DepartmentInterface } from '../../interfaces/interfaces';
import { useMutation } from "@apollo/client";
import { ADD_DEPARTMENT } from "../../graphql/Mutation/Mutation"

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

const DepartmentCardList = ({list, add} : {list: DepartmentInterface[], add: boolean}) => {

  const [listDepartment, setlistDepartmentt] = useState(list);
  const [formValue, setFormValue] = useState({departmentName: '', description: ''});
  const [ addDepartment, { data } ] = useMutation(ADD_DEPARTMENT);

  console.log(listDepartment)

  useEffect(() => {
    if(data) {
      setlistDepartmentt(data);

    }
  }, data);

  const handleChange = (e: any) => {
    setFormValue({
      ...formValue, 
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormValue({departmentName: '', description: ''})
    if (formValue) {
      addDepartment({ 
        variables: { 
          input: { 
            name: formValue.departmentName, 
            description: formValue.description 
          }, 
        }
    });
    }
  }

  const items = listDepartment.map((item) => {
    return (
      <DepartmentCard
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <ThemeProvider theme={theme}>
      {  add 
        ? <>
            <ul className="DepartmentCardList">
              <Grid container>
                <Grid item xs={12} md={6} minHeight='auto'>
                  <li className="DepartmentCard">
                    <Box sx={styleBox}>
                      <form onSubmit={handleSubmit}>
                        <Grid container direction='column'rowSpacing={3} >
                          <Grid item xs={12}>
                            <Input 
                              name='departmentName'
                              placeholder="Название отдела"
                              value={formValue.departmentName} 
                              onChange={handleChange}
                              fullWidth={true}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Input 
                              name='description'
                              placeholder="Описание" 
                              value={formValue.description} 
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
                  </li>              
                </Grid>
                {items}
              </Grid>
            </ul>
          </> 
        : <ul className="DepartmentCardList">
            <Grid container>
                {items}
            </Grid>
          </ul>
      }
      </ThemeProvider>
  
  );
}

export default DepartmentCardList;


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