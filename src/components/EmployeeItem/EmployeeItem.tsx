import React, { useState } from 'react';
import './EmployeeItem.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Card, Fab, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmployeeForm from '../EmployeeForm/EmployeeForm';

const EmployeeItem = ({item, deleteEmployee, updateEmployee, positions}: {item: any, deleteEmployee: Function, updateEmployee: Function, positions: any}) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [edit, setEdit] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        {
          edit
          ? <EmployeeForm 
              edit={edit} 
              item={item}  
              updateEmployee={updateEmployee} 
              positions={positions} 
              setEdit={setEdit}
            />
          : <Card sx={styleCard}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container direction="row" justifyContent="space-between" alignItems="top">
                    <div>
                      <h3>{item.name}</h3>
                      <h3>{item.surname}</h3>
                    </div>
                    <Fab color="secondary" onClick={handleClick}>
                      <MoreVertIcon />
                    </Fab>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <Fab color="secondary" onClick={() => setEdit(true)}>
                          <EditIcon />
                        </Fab>  
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Fab color="secondary" onClick={() => deleteEmployee({variables: { userId: item.id}})}>
                          <DeleteIcon />
                        </Fab>
                      </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div>
                      <p>{item.position.title}</p>
                      <p>{item.email}</p>
                  </div>
                </Grid>
              </Grid>
            </Card>
        }
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
