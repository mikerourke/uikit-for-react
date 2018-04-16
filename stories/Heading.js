import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Heading } from '../src/components';

Heading.displayName = 'Heading';

storiesOf('Heading', module)
  .add('Heading primary', () => (
    <Division margin={{ all: 'large' }}>
      <Heading as="h1" primary>
        Heading Primary
      </Heading>
    </Division>
  ))

  .add('Heading hero', () => (
    <Division margin={{ all: 'large' }}>
      <Heading as="h1" hero>
        Heading Hero
      </Heading>
    </Division>
  ))

  .add('Heading divider', () => (
    <Division margin={{ all: 'large' }}>
      <Heading as="h1" divider>
        Heading Divider
      </Heading>
    </Division>
  ))

  .add('Heading bullet', () => (
    <Division margin={{ all: 'large' }}>
      <Heading as="h1" bullet>
        Heading Bullet
      </Heading>,
    </Division>
  ))

  .add('Heading line', () => (
    <Division margin={{ all: 'large' }}>
      <Heading as="h1" line>
        Heading Line
      </Heading>
      <Heading as="h1" line="center">
        <span>Heading Line</span>
      </Heading>
      <Heading as="h1" line="right">
        Heading Line
      </Heading>
    </Division>
  ));
