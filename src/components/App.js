// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = lazy(() => import('./UserList'));
const PostList = lazy(() => import('./PostList'));

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
