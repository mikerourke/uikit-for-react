import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Heading } from '../../src/components';

Heading.displayName = 'Heading';

storiesOf('Heading', module)
  .add('Heading primary', () => (
    <Block margin={{ all: 'large' }}>
      <Heading as="h1" primary>
        Heading Primary
      </Heading>
    </Block>
  ))

  .add('Heading hero', () => (
    <Block margin={{ all: 'large' }}>
      <Heading as="h1" hero>
        Heading Hero
      </Heading>
    </Block>
  ))

  .add('Heading divider', () => (
    <Block margin={{ all: 'large' }}>
      <Heading as="h1" divider>
        Heading Divider
      </Heading>
    </Block>
  ))

  .add('Heading bullet', () => (
    <Block margin={{ all: 'large' }}>
      <Heading as="h1" bullet>
        Heading Bullet
      </Heading>,
    </Block>
  ))

  .add('Heading line', () => (
    <Block margin={{ all: 'large' }}>
      <Heading as="h1" line>
        Heading Line
      </Heading>
      <Heading as="h1" line="center">
        <span>Heading Line</span>
      </Heading>
      <Heading as="h1" line="right">
        Heading Line
      </Heading>
    </Block>
  ));
