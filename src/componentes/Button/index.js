<<<<<<< HEAD
import styled from "styled-components";

/* Se um dia eu precisar usar, dentro do Styled component, um Link, eu precisaria substituir o "button"
de "styled.button" por "Link" e fazer o import do Link */

/* import { Link } from 'react-router-dom';
const Button = styled.(Link)` */

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    
    &:hover,
    &:focus {
        opacity: .5;
  }
`;

=======
import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    
    &:hover,
    &:focus {
        opacity: .5;
  }
`;

>>>>>>> fee2e38535e61e329aa2e65d554cd14c4a1ad01b
export default Button;