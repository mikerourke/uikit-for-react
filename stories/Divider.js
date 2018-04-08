import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Divider } from '../../src/components';

Divider.displayName = 'Divider';

storiesOf('Divider', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Divider />
    </Block>
  ))

  .add('Divider icon', () => (
    <Block margin={{ all: 'large' }}>
      <Divider icon />
    </Block>
  ))

  .add('Divider small', () => (
    <Block margin={{ all: 'large' }}>
      <Divider small />
    </Block>
  ));
