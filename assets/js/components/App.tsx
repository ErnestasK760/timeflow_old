import React from 'react';
import ReactDOM from 'react-dom/client';
import '/assets/js/components/App.css';
import Navbar from "./navbar/Navbar";

interface Props {

}

const App: React.FC<Props> = () => {
    return (
        <div>
        <Navbar />
        </div>
    );
}

export default App;