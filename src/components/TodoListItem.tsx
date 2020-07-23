import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export const TodoListItem: React.FC<Props> = props => {
  return (
    <li>
      {props.children}
      <DeleteButton onClick={props.onClick}>×</DeleteButton>
    </li>
  );
};

const DeleteButton = styled.span`
  font-size: 2rem;
  cursor: pointer;
`;