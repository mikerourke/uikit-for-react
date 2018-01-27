import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Alert from '../components/elements/Alert';
import Close from '../components/elements/Close';
import Container from '../components/layout/Container';

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
