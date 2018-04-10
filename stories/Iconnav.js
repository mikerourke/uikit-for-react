import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Iconnav } from '../src/components';

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
    <Block margin={{ all: 'large' }}>
      <SharedIconnav />
    </Block>
  ))

  .add('Vertical alignment', () => (
    <Block margin={{ all: 'large' }}>
      <SharedIconnav vertical />
    </Block>
  ));
