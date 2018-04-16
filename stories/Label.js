import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Label } from '../src/components';

Label.displayName = 'Label';

storiesOf('Label', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Label>Default</Label>
    </Division>
  ))

  .add('Style modifiers', () => (
    <Division margin={{ all: 'large' }}>
      <Division margin>
        <Label margin={{ right: 'small' }}>Default</Label>
        <Label margin={{ right: 'small' }} success>
          Success
        </Label>
        <Label margin={{ right: 'small' }} warning>
          Warning
        </Label>
        <Label danger>Danger</Label>
      </Division>
    </Division>
  ));
