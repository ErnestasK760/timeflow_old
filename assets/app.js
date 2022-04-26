/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (layout.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./components/navbar/Navbar";

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

class App extends React.Component {
    render() {
        return (
           <Navbar />
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);