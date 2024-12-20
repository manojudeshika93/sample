import plugin from 'tailwindcss/plugin';

import tailwindUtils from './config/style.config';
import { Colors } from './constants';

module.exports = {
  theme: {
    colors: Colors,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(tailwindUtils);
    }),
  ],
};
