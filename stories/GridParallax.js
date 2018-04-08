import React from 'react';
import { storiesOf } from '@storybook/react';
import range from 'lodash/range';
import {
  Block,
  Card,
  Container,
  GridParallax,
  Heading,
} from '../src/components';

GridParallax.displayName = 'GridParallax';

storiesOf('GridParallax', module)
  .add('Usage', () => (
    <Block>
      <Container textAlign="center" margin={{ top: 'large' }}>
        <Heading>Scroll Down</Heading>
      </Container>
      <Block style={{ marginTop: 'calc(100vh - 48px)' }}>
        <Block margin={{ all: 'large' }}>
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
        </Block>
      </Block>
    </Block>
  ))

  .add('Wrapping into next line', () => (
    <Block>
      <Container textAlign="center" margin={{ top: 'large' }}>
        <Heading>Scroll Down</Heading>
      </Container>
      <Block style={{ marginTop: 'calc(100vh - 24px)' }}>
        <Block margin={{ all: 'large' }}>
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
        </Block>
      </Block>
    </Block>
  ));
