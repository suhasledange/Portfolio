import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Work } from './pages/index.js';
import App from './App.jsx';
import { Loader } from './components/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Work />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);


const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Loader />
      ) : (
        <RouterProvider router={router}>
        </RouterProvider>
      )}
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);
