import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb, Block } from '../../src/components';

Breadcrumb.displayName = 'Breadcrumb';

storiesOf('Breadcrumb', module).add('Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Breadcrumb>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item disabled>Disabled</Breadcrumb.Item>
      <Breadcrumb.Item active>Active</Breadcrumb.Item>
    </Breadcrumb>
  </Block>
));
