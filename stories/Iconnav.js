import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Iconnav } from '../src/components';

Iconnav.displayName = 'Iconnav';

const SharedIconnav = props => (
  <Iconnav {...props}>
    <Iconnav.Item iconName="plus" />
    <Iconnav.Item iconName="file-edit" />
    <Iconnav.Item iconName="copy" />
    <Iconnav.Item iconName="trash" />
  </Iconnav>
);

storiesOf('Iconnav', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <SharedIconnav />
    </Division>
  ))

  .add('Vertical alignment', () => (
    <Division margin={{ all: 'large' }}>
      <SharedIconnav vertical />
    </Division>
  ));
