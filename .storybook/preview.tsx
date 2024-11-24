import type { Preview } from "@storybook/react";
import {ThemeProvider} from "../src/hooks/useThemeHook"
import { Decorator } from '@storybook/react';
import React from "react";
import '../src/normalize.css'

const withThemeProvider: Decorator= (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeProvider]
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
