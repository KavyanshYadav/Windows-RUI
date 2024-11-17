import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputProps } from './Input';
import { useTheme } from '../../hooks/useThemeHook';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' }, // Logs events in Storybook's action panel
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => {
  const [value, setValue] = useState(args.value || '');
  const theme = useTheme()
  useEffect(() => {
    theme.toggleTheme()
  
    return () => {
      
    }
  }, [])
  
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange && args.onChange(e);
      }}
      Icon={<div>name</div>}
      onClick={()=>{
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text here...',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'This is disabled',
  disabled: true,
};
