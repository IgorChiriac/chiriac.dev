import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
      margin: 0;
      padding: 0;
      line-height: 1.85em;
      font-size: 14px;
      font-family: 'Poppins', sans-serif;
      color: #242732;
  }
  
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
  }
  
  img {
      border: none;
      margin: 0;
      padding: 0;
  }
  
  a {
      margin: 0;
      padding: 0;
      cursor: pointer;
      text-decoration: none;
      -o-transition: all .3s;
      -moz-transition: all .3s;
      -webkit-transition: all .3s;
      -ms-transition: all .3s;
      color: #3e43e9;
  }
  input:focus,
  button:focus,
  a:focus {
    outline: 0;
  }
`;

export default GlobalStyle;
