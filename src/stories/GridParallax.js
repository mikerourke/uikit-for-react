import React from 'react';
import { storiesOf } from '@storybook/react';
import { range } from 'lodash';
import Card from '../components/containers/Card';
import GridParallax from '../components/layout/GridParallax';
import Container from '../components/layout/Container';

GridParallax.displayName = 'GridParallax';

storiesOf('GridParallax', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <GridParallax childWidth={{ atSm: 'expand' }}>
        <GridParallax.Cell>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
        </GridParallax.Cell>
        <GridParallax.Cell>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
        </GridParallax.Cell>
        <GridParallax.Cell>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
        </GridParallax.Cell>
      </GridParallax>
    </Container>
  ))

  .add('Wrapping into next line', () => (
    <Container margin={{ all: 'large' }}>
      <GridParallax
        translate={200}
        childWidth={{ atSm: '1/2', atMd: '1/3', atLg: '1/4' }}
        textAlign="center"
      >
        {range(0, 12).map(cell => (
          <GridParallax.Cell key={cell}>
            <Card>Item</Card>
          </GridParallax.Cell>
        ))}
      </GridParallax>
    </Container>
  ));
