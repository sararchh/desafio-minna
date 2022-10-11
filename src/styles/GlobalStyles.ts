import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

:root{
  --background:  #E5E5E5;
  --orange: #F87D50;
  --black: #1F1F1F;
  --green-200: #4DB783;
  --blue-700: #0F437B;
  --white: #FFFFFF;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth;
  
  @media (max-width: 1080px){
     font-size: 93.75%; /* 15px */
  }
  @media (max-width: 720px){
    font-size: 87.5%; /* 14px */
  }
}

body{
  -webkit-font-smoothing: antialiased;
  max-width: 375px;
  width: 375px;
}

body, input, textarea, button {
 font-family: 'Rubik', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: 400;
 font-family: 'Rubik', sans-serif;
 color: var(--black);
}

p {
  color: var(--black);
  font-family: 'Rubik', sans-serif;
}

button{
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Rubik', sans-serif;
}

a{
  text-decoration: none;
  text-align: center;
}

`