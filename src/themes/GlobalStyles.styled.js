import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;

        
  color:#151819;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  }
 body {
  background: #eff9fc;

  }
`;

export default GlobalStyle;
