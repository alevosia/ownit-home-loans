import { createGlobalStyle } from 'styled-components'

import { FontSizes } from './constants'

export const GlobalStyle = createGlobalStyle`
    h1 {
        font-size: ${FontSizes.ASTRONOMICAL};
    } 

    h2 {
        font-size: ${FontSizes.GIANT};
    }

    h3 {
        font-size: ${FontSizes.EXTRA_LARGE};
    }

    h4 {
        font-size: ${FontSizes.LARGE};
    }

    h5 {
        font-size: ${FontSizes.BIG};
    }

    a, p, span {
        font-size: ${FontSizes.REGULAR};
    }
`
