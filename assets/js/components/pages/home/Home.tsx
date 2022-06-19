import React from 'react';
import ReactDOM from "react-dom/client";
import '/assets/js/components/App.css';

interface Props {

}
const Home: React.FC<Props> = () => {
    return (
        <div className="body">
            <div className="inner-body">
                <h1>This is the home page</h1>
            </div>
        </div>
    );
}
export default Home;
