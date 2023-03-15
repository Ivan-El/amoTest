import React from 'react';
import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
    </>
  );
};

export default App;
