import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Alert, Container } from '../../components';

Alert.displayName = 'Alert';

const message = faker.lorem.sentence();

storiesOf('Alert', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Alert>{message}</Alert>
    </Container>
  ))

  .add('Close button', () => (
    <Container margin={{ all: 'large' }}>
      <Alert closeable>{message}</Alert>
    </Container>
  ))

  .add('Style modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Alert closeable primary>
        {message}
      </Alert>
      <Alert closeable success>
        {message}
      </Alert>
      <Alert closeable warning>
        {message}
      </Alert>
      <Alert closeable danger>
        {message}
      </Alert>
    </Container>
  ));
