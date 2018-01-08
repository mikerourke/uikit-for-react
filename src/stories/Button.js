import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import Container from '../components/Container';

Button.displayName = 'Button';

storiesOf('Button', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Button as="a" margin={{ right: 'small' }}>Link</Button>
      <Button margin={{ right: 'small' }}>Button</Button>
      <Button disabled>Disabled</Button>
    </Container>
  ))

  .add('Style modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Button margin={{ right: 'small' }}>Default</Button>
      <Button primary margin={{ right: 'small' }}>Primary</Button>
      <Button secondary margin={{ right: 'small' }}>Secondary</Button>
      <Button danger margin={{ right: 'small' }}>Danger</Button>
      <Button text margin={{ right: 'small' }}>Text</Button>
      <Button link margin={{ right: 'small' }}>Link</Button>
    </Container>
  ))

  .add('Size modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Container margin>
        <Button size="small" margin={{ right: 'small' }}>Small button</Button>
        <Button size="small" primary margin={{ right: 'small' }}>Small button</Button>
        <Button size="small" secondary margin={{ right: 'small' }}>Small button</Button>
      </Container>
      <Container margin>
        <Button size="large" margin={{ right: 'small' }}>Large button</Button>
        <Button size="large" primary margin={{ right: 'small' }}>Large button</Button>
        <Button size="large" secondary margin={{ right: 'small' }}>Large button</Button>
      </Container>
    </Container>
  ))

  .add('Width modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Button fullWidth margin={{ bottom: 'small' }}>Button</Button>
      <Button fullWidth primary margin={{ bottom: 'small' }}>Button</Button>
      <Button fullWidth secondary>Button</Button>
    </Container>
  ))

  .add('Group', () => (
    <Container margin={{ all: 'large' }}>
      <Container>
        <Button.Group>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
        </Button.Group>
      </Container>
      <Container margin>
        <Button.Group>
          <Button primary>Button</Button>
          <Button primary>Button</Button>
          <Button primary>Button</Button>
        </Button.Group>
      </Container>
      <Container margin>
        <Button.Group>
          <Button danger>Button</Button>
          <Button danger>Button</Button>
          <Button danger>Button</Button>
        </Button.Group>
      </Container>
    </Container>
  ))

  // TODO: Add dropdown after complete.
  .add('Button with dropdowns', () => (
    <Container margin={{ all: 'large' }}>
      <Button>Dropdown</Button>
    </Container>
  ));
