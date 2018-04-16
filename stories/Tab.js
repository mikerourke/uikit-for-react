import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Grid, Tab } from '../src/components';

Tab.displayName = 'Tab';

storiesOf('Tab', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Tab>
        <Tab.Item active>Left</Tab.Item>
        <Tab.Item>Item</Tab.Item>
        <Tab.Item>Item</Tab.Item>
        <Tab.Item disabled>Disabled</Tab.Item>
      </Tab>
    </Division>
  ))

  .add('Bottom modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Tab align="bottom">
        <Tab.Item active>Left</Tab.Item>
        <Tab.Item>Item</Tab.Item>
        <Tab.Item>Item</Tab.Item>
      </Tab>
    </Division>
  ))

  .add('Left/right modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth="1/2">
        <Grid.Cell>
          <Tab align="left">
            <Tab.Item active>Left</Tab.Item>
            <Tab.Item>Item</Tab.Item>
            <Tab.Item>Item</Tab.Item>
          </Tab>
        </Grid.Cell>
        <Grid.Cell>
          <Tab align="right">
            <Tab.Item active>Right</Tab.Item>
            <Tab.Item>Item</Tab.Item>
            <Tab.Item>Item</Tab.Item>
          </Tab>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Alignment', () => (
    <Division>
      <Division margin={{ top: 'medium' }}>
        <Tab flex={{ justifyContent: 'center' }}>
          <Tab.Item active>Center</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
        </Tab>
      </Division>
      <Division margin={{ top: 'medium' }}>
        <Tab flex={{ justifyContent: 'right' }}>
          <Tab.Item active>Right</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
        </Tab>
      </Division>
      <Division>
        <Tab flex={{ justifyContent: 'center' }} childWidth="expand">
          <Tab.Item active>Justify</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
        </Tab>
      </Division>
    </Division>
  ));
