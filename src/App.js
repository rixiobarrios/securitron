import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import StickyFooter from './components/StickyFooter';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
      <>
          <AppBar />
          <Profile />
          <StickyFooter />
      </>
  );
}

export default App;
