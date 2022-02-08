import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Fab } from '@mui/material';
import './DepartmentCard.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

const DepartmentCard = ({item, deleteDepartment}: {item: any, deleteDepartment: Function}) => {

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
    
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} md={6}>
                <li className="DepartmentCard">
                    <Link to={`/department/${item.id}`}>
                        <Box sx={
                            item.countEmployee
                                ? styleBox 
                                : {...styleBox, border: '5px solid #F35F51'}
                        }>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <h3>{item.title}</h3>
                                {
                                    !item.countEmployee
                                    ?   <Fab 
                                            color="secondary"
                                            onClick={(e) => {
                                                e.preventDefault(); 
                                                deleteDepartment({variables: { departmentId: item.id }})
                                            }}
                                        >
                                            <DeleteIcon />
                                        </Fab>
                                    : null
                                }
                            </Grid>
                            <p>{item.description}</p>
                            <p>Количество сотрудников: {item.countEmployee}</p>
                        </Box>
                    </Link>
                </li>
            </Grid>
        </ThemeProvider>
    );
}

export default DepartmentCard;


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
