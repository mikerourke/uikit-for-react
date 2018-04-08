import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Label } from '../src/components';

Label.displayName = 'Label';

storiesOf('Label', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Label>Default</Label>
    </Block>
  ))

  .add('Style modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Block margin>
        <Label margin={{ right: 'small' }}>Default</Label>
        <Label margin={{ right: 'small' }} success>
          Success
        </Label>
        <Label margin={{ right: 'small' }} warning>
          Warning
        </Label>
        <Label danger>Danger</Label>
      </Block>
    </Block>
  ));
