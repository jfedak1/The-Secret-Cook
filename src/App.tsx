import { useState, useEffect } from 'react';
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
      const { data } = await supabase.auth.getUser();
      setIsAuthenticated(true);
      // setIsAuthenticated(!!data.user); // true if user exists, false otherwise
    };

    checkAuthentication();
  }, []);

  // if (isAuthenticated === null) {
    // Optionally show a loading screen while checking authentication
  //   return <div>Loading...</div>;
  // }

  return (
    <MantineProvider>
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
