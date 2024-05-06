import { theme as base, extendTheme } from '@chakra-ui/react';
import components from './components';
import * as foundations from './foundations';

export const theme = extendTheme({
  fonts: {
    heading: `'IBM_Plex_Sans_Thai', sans-serif`,
    body: `'IBM_Plex_Sans_Thai', sans-serif`,
  },
  styles: {
    global: {
      '*,*::before,*::after': {
        boxSizing: 'border-box',
      },
      body: {
        width: '100%',
      },
      main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: foundations.colors.bg,
      },
    },
  },
  ...foundations,
  components,
});
