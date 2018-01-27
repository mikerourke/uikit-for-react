import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../components/navigation/Breadcrumb';
import Container from '../components/layout/Container';

Breadcrumb.displayName = 'Breadcrumb';

storiesOf('Breadcrumb', module).add('Basic Usage', () => (
  <Container margin={{ all: 'large' }}>
    <Breadcrumb>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item>Item</Breadcrumb.Item>
      <Breadcrumb.Item disabled>Disabled</Breadcrumb.Item>
      <Breadcrumb.Item active>Active</Breadcrumb.Item>
    </Breadcrumb>
  </Container>
));
