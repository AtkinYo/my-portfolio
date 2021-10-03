import styled from 'styled-components';

import Button from './Button';

export const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  transition: ease-in-out 200ms;
  font-weight: bolder;
  text-transform: uppercase;
  border: none;

  &:hover {
    background-color: ${(props) => props.color1};

    & Label {
      color: ${(props) => props.label};
    }
  }
`;

export const ButtonLabel = styled.label`
  font-size: 25px;
  color: white;
`;
