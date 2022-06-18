import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import '/assets/js/components/App.css';

interface Props {
}

const Content: React.FC<Props> = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className="body">
            <div className="inner-body">
                <div>
                    <h1>This is the content page</h1>
                </div>
            </div>
        </div>
    );
}
export default Content;
