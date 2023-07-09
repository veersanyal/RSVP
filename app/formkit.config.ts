/* In this file, export your final config.
It will automatically be injected into the playground for you.
Imports from other playground files are supported. */

import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import TailwindTheme from "./tailwind-form-theme.js";
export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(TailwindTheme),
  },
};
