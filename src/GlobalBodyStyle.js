import { createGlobalStyle } from 'styled-components'

const GlobalBodyStyle = createGlobalStyle`
    body{
        background-color: #0e0e13;
    }
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalBodyStyle;