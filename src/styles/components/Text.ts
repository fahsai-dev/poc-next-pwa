import { defineStyleConfig } from '@chakra-ui/react';

export const variants = {
  normalMedium: {
    fontWeight: 'medium',
    fontSize: '12px',
  },
  paragraphMedium: {
    fontWeight: 'medium',
    fontSize: '14px',
  },
  paragraph: {
    fontSize: '14px',
  },
  smallerMedium: {
    fontWeight: 'medium',
    fontSize: '10px',
  },
  smaller: {
    fontSize: '10px',
  },
  heading: {
    fontWeight: 'medium',
    fontSize: '18px',
  },
  subTitleMedium: {
    fontWeight: 'medium',
    fontSize: '16px',
  },
  subTitle: {
    fontSize: '16px',
  },
};

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    fontSize: '12px',
  },
  variants,
});
