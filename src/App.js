import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimeRouter } from './routers/AnimeRouter';

export const App = () => {
  return( 
        <BrowserRouter>
            <AnimeRouter />
        </BrowserRouter>
        );
};
