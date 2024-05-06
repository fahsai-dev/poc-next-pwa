import { defineStyleConfig } from '@chakra-ui/react';
import { breakpoints } from '../foundations';

export const Container = defineStyleConfig({
  baseStyle: {},
  sizes: {
    sm: {
      maxWidth: breakpoints.sm,
      px: '16px',
    },
  },

  defaultProps: {
    size: 'sm',
  },
});
