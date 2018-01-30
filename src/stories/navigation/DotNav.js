import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, DotNav } from '../../components';

DotNav.displayName = 'DotNav';

storiesOf('DotNav', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <DotNav>
        <DotNav.Item active>Item 1</DotNav.Item>
        <DotNav.Item>Item 2</DotNav.Item>
        <DotNav.Item>Item 3</DotNav.Item>
        <DotNav.Item>Item 4</DotNav.Item>
        <DotNav.Item>Item 5</DotNav.Item>
      </DotNav>
    </Container>
  ))

  .add('Vertical alignment', () => (
    <Container margin={{ all: 'large' }}>
      <DotNav vertical>
        <DotNav.Item active>Item 1</DotNav.Item>
        <DotNav.Item>Item 2</DotNav.Item>
        <DotNav.Item>Item 3</DotNav.Item>
        <DotNav.Item>Item 4</DotNav.Item>
        <DotNav.Item>Item 5</DotNav.Item>
      </DotNav>
    </Container>
  ));
