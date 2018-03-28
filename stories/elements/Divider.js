import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base, Divider } from '../../src/components';

Divider.displayName = 'Divider';

storiesOf('Divider', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Divider />
    </Base>
  ))

  .add('Divider icon', () => (
    <Base margin={{ all: 'large' }}>
      <Divider icon />
    </Base>
  ))

  .add('Divider small', () => (
    <Base margin={{ all: 'large' }}>
      <Divider small />
    </Base>
  ));
