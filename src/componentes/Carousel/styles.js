import styled from 'styled-components';

export const Title = styled.h3`
  background: red;
  border-radius: 4px;
  display: inline-block;
  font-size: 35px;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  line-height: 1;
  margin-bottom: 16px;
  padding: 20px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    /* O display: block já faz ele ir para a linha de baixo no mobile (abaixo do nome maior) */
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  overflow-x: auto;
  padding-left: 0;
  padding-bottom: 32px;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
