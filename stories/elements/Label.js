import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base, Label } from '../../src/components';

Label.displayName = 'Label';

storiesOf('Label', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Label>Default</Label>
    </Base>
  ))

  .add('Style modifiers', () => (
    <Base margin={{ all: 'large' }}>
      <Base margin>
        <Label margin={{ right: 'small' }}>Default</Label>
        <Label margin={{ right: 'small' }} success>
          Success
        </Label>
        <Label margin={{ right: 'small' }} warning>
          Warning
        </Label>
        <Label danger>Danger</Label>
      </Base>
    </Base>
  ));
