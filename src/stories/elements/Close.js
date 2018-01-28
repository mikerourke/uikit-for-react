import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Alert, Close, Container } from '../../components';

Close.displayName = 'Close';

storiesOf('Close', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Close />
    </Container>
  ))

  .add('Large modifier', () => (
    <Container margin={{ all: 'large' }}>
      <Close large />
    </Container>
  ))

  .add('Close in alerts', () => (
    <Container margin={{ all: 'large' }}>
      <Alert closeable>{faker.lorem.sentence()}</Alert>
    </Container>
  ));
