import React from 'react';
import ReactDOM from "react-dom/client";

export class Try extends React.Component<any, any> {
    render() {
        return <h1>New code</h1>;
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Try />);