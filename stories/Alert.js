import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert, Block } from '../../src/components';

Alert.displayName = 'Alert';

const message = faker.lorem.sentence();

storiesOf('Alert', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Alert>{message}</Alert>
    </Block>
  ))

  .add('Close button', () => (
    <Block margin={{ all: 'large' }}>
      <Alert closeable>
        <h3>Notice</h3>
        <p>{message}</p>
      </Alert>
    </Block>
  ))

  .add('Style modifiers', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Event handlers', () => (
    <Block margin={{ all: 'large' }}>
      <Alert
        closeable
        primary
        onBeforeHide={action('onBeforeHide')}
        onHide={action('onHide')}
      >
        {message}
      </Alert>
    </Block>
  ));
