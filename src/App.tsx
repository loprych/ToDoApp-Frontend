import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routing} from "./features/Routing";
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';

function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <Routing/>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
