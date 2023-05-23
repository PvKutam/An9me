import { createGlobalStyle  } from 'styled-components';

const GlobalStyle=createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none ;
        text-decoration: none;
        font-family: 'Inter' ,sans-serif;
        color:white
    }
    body{
        background-color: #000; 
    }

    h3{
        margin:0.3rem;
      }
`;


export default GlobalStyle