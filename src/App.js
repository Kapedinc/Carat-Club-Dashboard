import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from './CaratDesignSystemLightTheme';
function App() {
    return (React.createElement(HelmetProvider, null,
        React.createElement(StyledEngineProvider, { injectFirst: true },
            React.createElement(ThemeProvider, { theme: questTheme },
                React.createElement(Routes, null)))));
}
export default App;
//# sourceMappingURL=App.js.map