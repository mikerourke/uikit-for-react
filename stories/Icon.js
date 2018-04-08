import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Icon } from '../../src/components';

Icon.displayName = 'Icon';

storiesOf('Icon', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Icon margin={{ right: 'small' }} name="check" />
      <Icon as="a" name="heart" />
    </Block>
  ))

  .add('Ratio', () => (
    <Block margin={{ all: 'large' }}>
      <Icon margin={{ right: 'small' }} name="check" ratio={2} />
      <Icon name="check" ratio={3.5} />
    </Block>
  ))

  .add('Link modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Icon as="a" href="#" margin={{ right: 'small' }} name="copy" link />
      <Icon as="a" href="#" margin={{ right: 'small' }} name="file-edit" link />
      <Icon as="a" href="#" name="trash" link />
    </Block>
  ))

  .add('Button modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Icon as="a" href="" margin={{ right: 'small' }} name="twitter" button />
      <Icon as="a" href="" margin={{ right: 'small' }} name="facebook" button />
      <Icon as="a" href="" name="google-plus" button />
    </Block>
  ));
