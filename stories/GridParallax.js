import React from 'react';
import { storiesOf } from '@storybook/react';
import range from 'lodash/range';
import {
  Division,
  Card,
  Container,
  GridParallax,
  Heading,
} from '../src/components';

GridParallax.displayName = 'GridParallax';

storiesOf('Grid Parallax', module)
  .add('Usage', () => (
    <Division>
      <Container textAlign="center" margin={{ top: 'large' }}>
        <Heading>Scroll Down</Heading>
      </Container>
      <Division style={{ marginTop: 'calc(100vh - 48px)' }}>
        <Division margin={{ all: 'large' }}>
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
        </Division>
      </Division>
    </Division>
  ))

  .add('Wrapping into next line', () => (
    <Division>
      <Container textAlign="center" margin={{ top: 'large' }}>
        <Heading>Scroll Down</Heading>
      </Container>
      <Division style={{ marginTop: 'calc(100vh - 24px)' }}>
        <Division margin={{ all: 'large' }}>
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
        </Division>
      </Division>
    </Division>
  ));
