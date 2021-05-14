import React from 'react';

// context
import { GlobalProvider } from './context/GlobalState';

// components
import Layout from './components/Layout/Layout';

// pages
import Dashboard from './pages/Dashboard/Dashboard';

export default function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </GlobalProvider>
  );
}
