import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Icon } from '../../components';

Icon.displayName = 'Icon';

storiesOf('Icon', module)
  .add('Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Icon margin={{ right: 'small' }} name="check" />
      <Icon as="a" name="heart" />
    </Container>
  ))

  .add('Ratio', () => (
    <Container margin={{ all: 'large' }}>
      <Icon margin={{ right: 'small' }} name="check" ratio={2} />
      <Icon name="check" ratio={3.5} />
    </Container>
  ))

  .add('Link modifier', () => (
    <Container margin={{ all: 'large' }}>
      <Icon as="a" href="#" margin={{ right: 'small' }} name="copy" link />
      <Icon as="a" href="#" margin={{ right: 'small' }} name="file-edit" link />
      <Icon as="a" href="#" name="trash" link />
    </Container>
  ))

  .add('Button modifier', () => (
    <Container margin={{ all: 'large' }}>
      <Icon as="a" href="" margin={{ right: 'small' }} name="twitter" button />
      <Icon as="a" href="" margin={{ right: 'small' }} name="facebook" button />
      <Icon as="a" href="" name="google-plus" button />
    </Container>
  ));
