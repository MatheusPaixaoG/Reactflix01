import styled from 'styled-components';

export const VideoContainer = styled.div`
/* No position: relative, qualquer propriedade que a gente colocar dentro (fora o estético),
ele vai fazer com que a gente consiga movimentar esse nosso objeto na tela através de top, left, bottom
e right e movimentar de acordo com/relativo a algo. No nosso caso, o position: relative é relativo à
posição inicial do nosso próprio elemento, mas ele também serve para a gente conseguir movimentar coisas
dentro dele que tenham o position: absolute em referência a ele */
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
/* O positoin: absolute aqui */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  /* Pega os 100% do pai */
  height: 100%;
`;