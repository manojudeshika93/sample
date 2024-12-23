import plugin from 'tailwindcss/plugin';

import tailwindUtils from './config/style.config';
import { Colors } from './constants';

module.exports = {
  theme: {
    colors: Colors,
    extend: {
      boxShadow: {
        xl: '0 10px 10px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(tailwindUtils);
    }),
  ],
};
