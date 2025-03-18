import { createGlobalStyle } from "styled-components";
import { pxToRem } from "../utils/utils";


export const GlobalStyles = createGlobalStyle`
:root {
   --color: black;
   --bg-color: rgb(236,237,242);
   --bg-color-header: white;
   --box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .3);
   --box-shadow-btn: 0px 0px 10px 1px rgba(0, 0, 0, .6);
   --border-color: rgba(0, 0, 0, .7);
}

[data-theme="dark"] {
   --color: white;
   --bg-color: #333;
   --bg-color-header: #111;
   --box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, .5);
   --box-shadow-btn: 0px 0px 10px 1px rgba(255, 255, 255, .2);
   --border-color: gray;
   --filter: brightness(0) invert(1)
}

* {
   margin: 0;
   padding: 0;
}

*,
*::before,
*::after {
   box-sizing: border-box;
}

body {
   background-color: var(--bg-color);
}

body,
button,
select,
option,
textarea {
   font-family: "Open Sans", sans-serif;
   font-size: ${pxToRem(16)};
}
`
