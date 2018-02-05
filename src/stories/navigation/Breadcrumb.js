import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb, Block } from '../../components';

Breadcrumb.displayName = 'Breadcrumb';

storiesOf('Breadcrumb', module).add('Basic Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Breadcrumb>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item disabled>Disabled</Breadcrumb.Item>
      <Breadcrumb.Item active>Active</Breadcrumb.Item>
    </Breadcrumb>
  </Block>
));
