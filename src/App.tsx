import { useState, useEffect } from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Groups from './pages/Groups';
import Layout from './components/Layout';
import supabase from './services/supabaseClient';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user); // true if user exists, false otherwise
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    // Optionally show a loading screen while checking authentication
    return <div></div>;
  }

  return (
    <MantineProvider 
    theme={{
      primaryColor: 'customYellow', // Name of your custom color palette
      colors: {
        customYellow: [
          '#ffe7b3', // Lightest shade (index 0)
          '#ffdf99', // 75%
          '#ffd780', // 70%
          '#ffcf66', // 65%
          '#ffc64d', // 60%
          '#ffbe33', // Primary shade (index 5)
          '#ffbd2e', // 55%
          '#ffb61a', // 50%
          '#ffae00', // 45%
          '#e69d00', // Darkest shade (index 9)
        ],
      },
    }}
    >
      <BrowserRouter>
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/groups" replace />}
          />
  
          {/* Authenticated Routes */}
          {isAuthenticated && (
            <Route element={<Layout />}>
              {/* Redirect root to /groups */}
              <Route path="/" element={<Navigate to="/groups" replace />} />
              {/* Groups Route */}
              <Route path="/groups" element={<Groups />} />
              {/* Lists Route */}
              {/* <Route path="/lists" element={<Lists />} /> */}
            </Route>
          )}
  
          {/* Redirect all unauthenticated users to Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
