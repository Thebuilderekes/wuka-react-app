import { createGlobalStyle } from "styled-components";


import CinzelWoff from "../src/assets/fonts/cinzel-v19-latin/cinzel-v19-latin-600.woff"
import CinzelWoff2 from "../src/assets/fonts/cinzel-v19-latin/cinzel-v19-latin-600.woff2"

import CrimsonWoff from  "./assets/fonts/crimson-text-v19-latin/crimson-text-v19-latin-600.woff"
import CrimsonWoff2 from "./assets/fonts/crimson-text-v19-latin/crimson-text-v19-latin-600.woff2"
import CrimsonWoff400 from  "./assets/fonts/crimson-text-v19-latin/crimson-text-v19-latin-regular.woff"
import CrimsonWoff2400 from "./assets/fonts/crimson-text-v19-latin/crimson-text-v19-latin-regular.woff2"




const FontStyles = createGlobalStyle`

/* crimson-text-600 - latin */
@font-face {
  font-family: 'Crimson Text';
  font-style: normal;
  font-weight: 600;
  src: local('Crimson Text'),
       url(${CrimsonWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${CrimsonWoff}) format('woff'); /* Modern Browsers */

}

/* cinzel-600 - latin */
@font-face {
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 600;
  src: local('Cinzel'),
       url(${ CinzelWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${ CinzelWoff}) format('woff'); /* Modern Browsers */
 
}
`

export default FontStyles;
