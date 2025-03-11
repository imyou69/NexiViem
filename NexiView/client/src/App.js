import React from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import ContentHeader from './components/ContentHeader';
import Assignments from './components/Assignments';
import Report from './components/Report';
import Stats from './components/Stats';
import Messages from './components/Messages';
import Help from './components/Help';
import './App.css';

// Home Page Component
const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to NexiViem</h1>
        <p>Your AI-powered Interview Analysis Platform</p>

        <div className="auth-links">
          <Link to="/login" className="btn btn-primary">Sign In</Link>
          <Link to="/signup" className="btn btn-success">Sign Up</Link>
        </div>
      </header>

      <main>
        <section className="info-section">
          <h2>What is NexiViem?</h2>
          <p>
            NexiViem helps you analyze your interview skills with AI-driven reports and insights.
          </p>
          <p>Start improving today!</p>
        </section>
      </main>
    </div>
  );
};

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/dashboard',
      element: (
        <div className="dashboard-layout">
          <Sidebar />
          <div className="dashboard-main">
            <ContentHeader />
            <div className="dashboard-content">
              <Dashboard />
              <Content />
              <Profile />
            </div>
          </div>
        </div>
      ),
    },
    {
      path: '/profile',
      element: <Profile />, // ✅ Added Profile Route
    },
    {
      path: '/assignments',
      element: <Assignments />
    },
    {
      path: '/report',
      element: <Report />
    },
    {
      path: '/stats',
      element: <Stats />
    },
    {
      path: '/messages',
      element: <Messages />
    },
    {
      path: '/help',
      element: <Help />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
