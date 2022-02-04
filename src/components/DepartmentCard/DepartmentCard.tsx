import React from 'react';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import './DepartmentCard.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DepartmentCard = ({item}: {item: any}) => {

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
                        <Box sx={styleBox}>
                            <h3>{item.name}</h3>
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
