import React, { useState } from 'react';
import DepartmentCardList from '../../components/DepartmentCardList/DepartmentCardList';
import './Main.scss';
import data from "../../json/DepartmentCardList.json";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Main = () => {

    const [add, setAdd] = useState<boolean>(false)

    const theme = createTheme({
        palette: {
          primary: {
            main: '#F35F51',
          },
        }
    });

    const addDepartmentCard = () => {
        setAdd(!add)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="Main">
                <div className="Department__header">
                    <h1>Exceed Team</h1>
                    <Fab 
                        size="medium" 
                        color="primary" 
                        onClick={addDepartmentCard}
                    >
                        <AddIcon />
                    </Fab>
                </div>
                <DepartmentCardList 
                    add={add}
                    addDepartmentCard={addDepartmentCard}
                />
            </div>
        </ThemeProvider>
    );
}

export default Main;

