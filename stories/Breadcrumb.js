import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Breadcrumb } from '../src/components';

Breadcrumb.displayName = 'Breadcrumb';

storiesOf('Breadcrumb', module).add('Usage', () => (
  <Division margin={{ all: 'large' }}>
    <Breadcrumb>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item disabled>Disabled</Breadcrumb.Item>
      <Breadcrumb.Item active>Active</Breadcrumb.Item>
    </Breadcrumb>
  </Division>
));
