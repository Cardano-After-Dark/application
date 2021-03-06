import styled from '@emotion/styled';

export const MainContent = styled.main`
  padding: 20px;
  padding-bottom: 0;
  min-height: 550px;
  min-width: 350px;
  grid-area: main;
`;

export const LayoutWrapper = styled.section`
  min-height: 100vh;
  min-width: 350px;
  background-image: url(https://cdn.pokernow.club/background-d2c70dea8bbded04f5de.jpg);
  background-size: cover;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 100px;
  grid-template-areas: 'main' 'footer';
`;

export const MainFooter = styled.footer`
  grid-area: footer;
`;
