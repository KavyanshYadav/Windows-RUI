import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';  // Adjust path if needed
import { useTheme } from '../../hooks/useThemeHook'; // Assuming you have a custom theme hook

export default {
  title: 'Components/Button',  // The section in Storybook
  component: Button,  // Component to be documented
} as ComponentMeta<typeof Button>;

// Template for Button Story
const Template: ComponentStory<typeof Button> = (args) => {
  const theme = useTheme();  // Hook to access the theme

  return (
    <>
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button variant="primary" {...args}>Primary</Button>
      <Button variant="secondary" {...args}>Secondary</Button>
      <Button variant="DarkOne" {...args}>DarkOne</Button>
      <Button variant="DarkTwo" {...args}>DarkTwo</Button>
      <Button variant="DarkThree" {...args}>DarkThree</Button>
      <Button variant="LightOne" {...args}>LightOne</Button>
      <Button variant="LightTwo" {...args}>LightTwo</Button>
      <Button variant="LightThree" {...args}>LightThree</Button>
    </div>
    <Button children="dd" variant='primary' onClick={()=>theme.setAccent("#E14278")}></Button>
    </>
  );
};

// Default story, providing a base template
export const Default = Template.bind({});
Default.args = {
  onClick: () => { console.log("Button clicked") },
};

// Example with a custom button that interacts with the theme
export const Interactive = Template.bind({});
Interactive.args = {
  onClick: () => {
    const newColor = '#d23737';  // Sample color change for theme
    console.log('Changing theme color to', newColor);
  },
  children: 'Join',  // Example of a Join button with a different action
};
