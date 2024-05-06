import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'IBM_Plex_Sans_Thai';
        font-style: normal;
        font-weight: 700;
        src: url('/assets/fonts/IBM_Plex_Sans_Thai/IBMPlexSansThai-Bold.ttf');
      }
      @font-face {
        font-family: 'IBM_Plex_Sans_Thai';
        font-style: normal;
        font-weight: 600;
        src: url('/assets/fonts/IBM_Plex_Sans_Thai/IBMPlexSansThai-SemiBold.ttf');
      }
      @font-face {
        font-family: 'IBM_Plex_Sans_Thai';
        font-style: normal;
        font-weight: 500;
        src: url('/assets/fonts/IBM_Plex_Sans_Thai/IBMPlexSansThai-Medium.ttf');
      }
      @font-face {
        font-family: 'IBM_Plex_Sans_Thai';
        font-style: normal;
        font-weight: 400;
        src: url('/assets/fonts/IBM_Plex_Sans_Thai/IBMPlexSansThai-Regular.ttf');
      }
      @font-face {
        font-family: 'IBM_Plex_Sans_Thai';
        font-style: normal;
        font-weight: 300;
        src: url('/assets/fonts/IBM_Plex_Sans_Thai/IBMPlexSansThai-Light.ttf');
      }
      @font-face {
        font-family: 'IBM_Plex_Sans_Thai';
        font-style: normal;
        font-weight: 200;
        src: url('/assets/fonts/IBM_Plex_Sans_Thai/IBMPlexSansThai-ExtraLight.ttf');
      }
      @font-face {
        font-family: 'IBM_Plex_Sans_Thai';
        font-style: normal;
        font-weight: 100;
        src: url('/assets/fonts/IBM_Plex_Sans_Thai/IBMPlexSansThai-Thin.ttf');
      }
      `}
  />
);

export default Fonts;
