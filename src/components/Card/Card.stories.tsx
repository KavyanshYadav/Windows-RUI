import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Card} from  "./Card"
import Button from '../Button/Button';
import { useTheme } from '../../hooks/useThemeHook';
export default {
    title: 'Components/Card',
    component: Card,
  };
  
  export const Default = () => {
    const theme = useTheme()
   return(<Card.Root width="320px">
      <Card.Body gap="2">
    
        <Card.Title mt="2">Nue Camp</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="primary" onClick={()=>{}}>View</Button>
        <Button onClick={()=>{theme.setThemeStyle({colors:{primary:"#d23737"}})}}>Join</Button>
      </Card.Footer>
    </Card.Root>
   )
  };
  