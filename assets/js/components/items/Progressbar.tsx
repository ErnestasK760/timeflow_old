import React, { useState } from 'react';
import styled from "styled-components";

type Bar = {
    width:string,
    cleanString:string,
    numberParsed:number,
    percentParsed:string,
}
let Bar = {
    width: '10%'
}

interface Props {
}
const Container = styled.div`
    margin: 100px auto;
    width: 500px;
    text-align: center;
`;
const Progress = styled.div`
    padding: 6px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
`;
const ProgressBar = styled.div`
    width: ${props => Bar.width};
    height: 18px;
    background-color: blue;
    border-radius: 4px; 
    transition: 0.4s linear;  
    transition-property: width, background-color;   
`;



const Progress_bar: React.FC<Props> = (bar: Bar) => {
    const [count, setCount] = useState<object | null | string | undefined>(Bar.width);
    function handleCountClick() {
        let cleanString = count.toString().replace(/[^a-zA-Z0-9 ]/g, '');
        let numberParsed = Number(cleanString) + 1;
        let percentParsed = numberParsed + "%";
        setCount(percentParsed);
        Bar.width = percentParsed;
    }
    return (
        <Container>
                <Progress>
                    <ProgressBar>
                    </ProgressBar>
                </Progress>
            <button onClick={handleCountClick}>Boom</button>
        </Container>
    );
};

export default Progress_bar;