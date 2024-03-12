import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyles = createGlobalStyle`

  body {
    text-align: center;
    font-size:10px;
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s ease; 
      }
  
  p{
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
  width: 2px; 
  height: 2px;
}

::-webkit-scrollbar-track {
  background: ${COLORS.scrollTrack};
}

::-webkit-scrollbar-thumb {
  background: ${COLORS.scrollThumb};
}

::-webkit-scrollbar-thumb:hover {
  background: ${COLORS.scrollThumbHover}; 
}

  scrollbar {
  width: 2px; 
 height: 2px;
}

scrollbar-track {
  background: ${COLORS.scrollTrack}; 
}

scrollbar-thumb {
  background: ${COLORS.scrollThumb}; 
}

scrollbar-thumb:hover {
  background: ${COLORS.scrollThumbHover}; 
}`;
