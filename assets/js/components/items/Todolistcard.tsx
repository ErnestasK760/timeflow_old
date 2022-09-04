import React from 'react';
import styled from "styled-components";

const TodoCard = styled.div`
    display: flex;
    border-radius: 20px 20px 20px 20px;
    min-width: 400px;
    max-width: 500px;
    box-shadow: -6px 5px 13px 1px rgba(56,50,50,0.75);
    -webkit-box-shadow: -6px 5px 13px 1px rgba(56,50,50,0.75);
    -moz-box-shadow: -6px 5px 13px 1px rgba(56,50,50,0.75);
`
const TodoCardLeftSide = styled.div`
    width: 12px;
    border-radius: 20px 0px 0px 20px;
    background: black;
`
const TodoCardRightSide = styled.div` 
    flex: 1;
    flex-flow: column;
`
const TodoCardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(315deg, #ffbc00, #ff0058);
    border-radius: 0px 17px 0px 0px;
    padding: 5px;
    color: white;
`
const TodoCardBody = styled.div`
    padding: 15px;
`
const TodoCardFooter = styled.div`
    display: flex;
    justify-content: center;
    background: linear-gradient(315deg, #ffbc00, #ff0058);
    padding: 5px;
    border-radius: 0px 0px 17px 0px;
    color: white;
`

interface Props {

}

const Todo_list_card: React.FC<Props> = () => {
    return (
      <TodoCard>
          <TodoCardLeftSide>
          </TodoCardLeftSide>

          <TodoCardRightSide>
              <TodoCardTop>
                  <h1>Card Title</h1>
              </TodoCardTop>
              <TodoCardBody>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              </TodoCardBody>
              <TodoCardFooter>
                  <small> Card footer</small>
              </TodoCardFooter>
          </TodoCardRightSide>
      </TodoCard>
    );
}

export default Todo_list_card;