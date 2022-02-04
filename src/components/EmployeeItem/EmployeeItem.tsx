import React from 'react';
import './EmployeeItem.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Card, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const EmployeeItem = ({item}: {item: any}) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#EFEFEF',
      },
      secondary: {
        main: '#243A7E',
      },
    }
  }) ;

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={11} md={4}>
        <Card sx={styleCard}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container direction="row"  justifyContent="space-between" alignItems="center">
                <h3>{item.firstName}</h3>
                <IconButton color="inherit">
                  <MoreVertIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div>
                  <p>{item.position}</p>
                  <p>{item.email}</p>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}

export default EmployeeItem;



// ---------- MUI Style ---------- //

const styleCard = {
  display: 'flex',
  flexDirection: { xs: 'row'},
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
