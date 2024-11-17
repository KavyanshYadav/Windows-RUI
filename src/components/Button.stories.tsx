import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from "./Button"

export default {
  title: 'Components/Button', // Component name in Storybook
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  onClick : ()=>{console.log("anme")}
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};
