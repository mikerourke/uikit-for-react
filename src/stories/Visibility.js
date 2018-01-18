import React from 'react';
import { storiesOf } from '@storybook/react';
import Visibility from '../components/Visibility';
import Container from '../components/Container';

Visibility.displayName = 'Visibility';

storiesOf('Visibility', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Visibility>
        <div>Test</div>
      </Visibility>
    </Container>
  ));
