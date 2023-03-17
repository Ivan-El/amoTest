import React from 'react';
import { Footer } from 'widgets/Footer';
import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

export default App;
