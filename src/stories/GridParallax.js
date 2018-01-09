import React from 'react';
import { storiesOf } from '@storybook/react';
import { range } from 'lodash';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Container from '../components/Container';

Grid.displayName = 'GridParallax';

storiesOf('GridParallax', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Grid parallax childWidth={{ atSm: 'expand' }}>
        <Grid.Cell>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
          <Card margin="grid">Item</Card>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Wrapping into next line', () => (
    <Container margin={{ all: 'large' }}>
      <Grid
        parallax={{ translate: 200 }}
        childWidth={{ atSm: '1/2', atMd: '1/3', atLg: '1/4' }}
        textAlign="center"
      >
        {range(0, 12).map(cell => (
          <Grid.Cell key={cell}>
            <Card>Item</Card>
          </Grid.Cell>
        ))}
      </Grid>
    </Container>
  ));
