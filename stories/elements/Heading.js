import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Heading } from '../../src/components';

Heading.displayName = 'Heading';

storiesOf('Heading', module)
  .add('Heading primary', () => (
    <Container margin={{ all: 'large' }}>
      <Heading as="h1" primary>
        Heading Primary
      </Heading>
    </Container>
  ))

  .add('Heading hero', () => (
    <Container margin={{ all: 'large' }}>
      <Heading as="h1" hero>
        Heading Hero
      </Heading>
    </Container>
  ))

  .add('Heading divider', () => (
    <Container margin={{ all: 'large' }}>
      <Heading as="h1" divider>
        Heading Divider
      </Heading>
    </Container>
  ))

  .add('Heading bullet', () => (
    <Container margin={{ all: 'large' }}>
      <Heading as="h1" bullet>
        Heading Bullet
      </Heading>
    </Container>
  ))

  .add('Heading line', () => (
    <Container margin={{ all: 'large' }}>
      <Heading as="h1" line>
        Heading Line
      </Heading>
      <Heading as="h1" line="center">
        <span>Heading Line</span>
      </Heading>
      <Heading as="h1" line="right">
        Heading Line
      </Heading>
    </Container>
  ));
