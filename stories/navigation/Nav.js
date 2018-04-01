import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Nav } from '../../src/components';

Nav.displayName = 'Nav';

storiesOf('Nav', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Block>
    </Block>
  ))

  .add('Nested navs', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Block>
    </Block>
  ));
