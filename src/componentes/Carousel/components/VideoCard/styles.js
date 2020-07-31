import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  border: 2px solid;
  border-radius: 10px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: flex;
  flex: 0 0 298px;
  height: 197px;
  overflow: hidden;
  padding: 16px;
  position: relative;
  text-decoration: none;
  width: 298px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    transform: scale(1.005);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
