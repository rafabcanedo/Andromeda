import { createGlobalStyle } from "styled-components";
import "@fontsource/sora";
import "@fontsource/iceland";
import "@fontsource/jua";
import "@fontsource/jost"

const GlobalStyles = createGlobalStyle`

 *,*::before,*::after {
     margin: 0;
     padding: 0;
 }

 body {
     font-family: 'Sora', sans-serif;
     overflow-x: hidden;
     background: #fff; // change when to final
 }

 h1, h2, h3, h4, h5, h6 {
     margin: 0;
     padding: 0;
 }

 a {
     color: inherit;
     text-decoration: none;
 }
`;

export default GlobalStyles;