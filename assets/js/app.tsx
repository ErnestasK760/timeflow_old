import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/App';
import Home from './components/pages/home/Home';
import Content from './components/pages/content/Content';
import About from './components/pages/about/About';

const root = ReactDOM.createRoot(document.getElementById('root')
);

root.render(
    <BrowserRouter>
        <App />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="content" element={<Content />} />
            <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
);