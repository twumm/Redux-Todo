import React from 'react'
import styled from 'styled-components';

import Todos from './Todos';
import TodoForm from './TodoForm';

const StyledContainer = styled.div`
  padding: 20px;
`;

export default function Container() {
  return (
    <StyledContainer>
      <Todos />
      <TodoForm />
    </StyledContainer>
  )
}
