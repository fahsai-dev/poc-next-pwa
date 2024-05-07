import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

const gray = defineStyle({
  _light: {
    [$startColor.variable]: '#80808020',
    [$endColor.variable]: '#80808080',
  },
  _dark: {
    [$startColor.variable]: '#80808020',
    [$endColor.variable]: '#80808080',
  },
});

export const Skeleton = defineStyleConfig({
  variants: { gray },
  defaultProps: {
    variant: 'gray',
  },
});
