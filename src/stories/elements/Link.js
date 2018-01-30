import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container, Inline, Link, List } from '../../components';

Link.displayName = 'Link';

storiesOf('Link', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Link href="#">Link</Link>
    </Container>
  ))

  .add('Link muted', () => (
    <Container margin={{ all: 'large' }}>
      <Link href="#" muted>
        Link
      </Link>
      <br />
      <br />
      <Inline linkStyle="muted">
        Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit,
        sed do <a href="#">eiusmod</a> tempor incididunt ut{' '}
        <a href="#">labore et</a> dolore magna aliqua.
      </Inline>
    </Container>
  ))

  .add('Link text', () => (
    <Container margin={{ all: 'large' }}>
      <List linkStyle="text">
        <List.Item>
          <Link>Link</Link>
        </List.Item>
        <List.Item>
          <Link>Link</Link>
        </List.Item>
        <List.Item>
          <Link>Link</Link>
        </List.Item>
      </List>
    </Container>
  ))

  .add('Link reset', () => (
    <Container margin={{ all: 'large' }}>
      <Link reset href="#">
        Link
      </Link>
    </Container>
  ));
