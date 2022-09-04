import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/App';
import Login from './components/pages/home/Login';
import Signup from './components/pages/todolist/Signup';
import About from './components/pages/about/About';

const root = ReactDOM.createRoot(document.getElementById('root')
);

root.render(
    <BrowserRouter>
        <App />
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
);