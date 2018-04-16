import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Icon } from '../src/components';

Icon.displayName = 'Icon';

storiesOf('Icon', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Icon margin={{ right: 'small' }} name="check" />
      <Icon as="a" name="heart" />
    </Division>
  ))

  .add('Ratio', () => (
    <Division margin={{ all: 'large' }}>
      <Icon margin={{ right: 'small' }} name="check" ratio={2} />
      <Icon name="check" ratio={3.5} />
    </Division>
  ))

  .add('Link modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Icon as="a" href="#" margin={{ right: 'small' }} name="copy" link />
      <Icon as="a" href="#" margin={{ right: 'small' }} name="file-edit" link />
      <Icon as="a" href="#" name="trash" link />
    </Division>
  ))

  .add('Button modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Icon as="a" href="" margin={{ right: 'small' }} name="twitter" button />
      <Icon as="a" href="" margin={{ right: 'small' }} name="facebook" button />
      <Icon as="a" href="" name="google-plus" button />
    </Division>
  ));
