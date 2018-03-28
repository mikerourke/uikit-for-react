import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert, Base } from '../../src/components';

Alert.displayName = 'Alert';

const message = faker.lorem.sentence();

storiesOf('Alert', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Alert>{message}</Alert>
    </Base>
  ))

  .add('Close button', () => (
    <Base margin={{ all: 'large' }}>
      <Alert closeable>{message}</Alert>
    </Base>
  ))

  .add('Style modifiers', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Event handlers', () => (
    <Base margin={{ all: 'large' }}>
      <Alert
        closeable
        primary
        onBeforeHide={action('onBeforeHide')}
        onHide={action('onHide')}
      >
        {message}
      </Alert>
    </Base>
  ));
