import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert, Division } from '../src/components';

Alert.displayName = 'Alert';

const message = faker.lorem.sentence();

storiesOf('Alert', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Alert>{message}</Alert>
    </Division>
  ))

  .add('Close button', () => (
    <Division margin={{ all: 'large' }}>
      <Alert closeable>
        <h3>Notice</h3>
        <p>{message}</p>
      </Alert>
    </Division>
  ))

  .add('Style modifiers', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Event handlers', () => (
    <Division margin={{ all: 'large' }}>
      <Alert
        closeable
        primary
        onBeforeHide={action('onBeforeHide')}
        onHide={action('onHide')}
      >
        {message}
      </Alert>
    </Division>
  ));
