import React from "react";
import ReactDOM from 'react-dom/client';
import { Try } from './components/Try';

class App extends React.Component {
    render() {
        return (
            <div>
            <Try />
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);