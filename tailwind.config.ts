import plugin from 'tailwindcss/plugin';

import { Colors } from './constants';
import tailwindUtils from './config/tailwind.utils';

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
