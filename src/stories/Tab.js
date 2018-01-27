import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../components/layout/Container';
import { BlockElement } from '../components/base';
import Grid from '../components/layout/Grid';
import Tab from '../components/layout/Tab';

Tab.displayName = 'Tab';

storiesOf('Tab', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Tab>
        <Tab.Item active>Left</Tab.Item>
        <Tab.Item>Item</Tab.Item>
        <Tab.Item>Item</Tab.Item>
        <Tab.Item disabled>Disabled</Tab.Item>
      </Tab>
    </Container>
  ))

  .add('Bottom modifier', () => (
    <Container margin={{ all: 'large' }}>
      <Tab align="bottom">
        <Tab.Item active>Left</Tab.Item>
        <Tab.Item>Item</Tab.Item>
        <Tab.Item>Item</Tab.Item>
      </Tab>
    </Container>
  ))

  .add('Left/right modifier', () => (
    <Container margin={{ all: 'large' }}>
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
    </Container>
  ))

  .add('Alignment', () => (
    <Container>
      <BlockElement margin={{ top: 'medium' }}>
        <Tab justifyContent="center">
          <Tab.Item active>Center</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
        </Tab>
      </BlockElement>
      <BlockElement margin={{ top: 'medium' }}>
        <Tab justifyContent="right">
          <Tab.Item active>Right</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
        </Tab>
      </BlockElement>
      <BlockElement>
        <Tab justifyContent="center" childWidth="expand">
          <Tab.Item active>Justify</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
          <Tab.Item>Item</Tab.Item>
        </Tab>
      </BlockElement>
    </Container>
  ));
