import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Divider } from '../src/components';

Divider.displayName = 'Divider';

storiesOf('Divider', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Divider />
    </Division>
  ))

  .add('Divider icon', () => (
    <Division margin={{ all: 'large' }}>
      <Divider icon />
    </Division>
  ))

  .add('Divider small', () => (
    <Division margin={{ all: 'large' }}>
      <Divider small />
    </Division>
  ));
