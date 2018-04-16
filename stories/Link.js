import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Link, List, Paragraph } from '../src/components';

Link.displayName = 'Link';

storiesOf('Link', module)
  .add('Link muted', () => (
    <Division margin={{ all: 'large' }}>
      <Link href="#" muted>
        Link
      </Link>
      <Paragraph linkStyle="muted">
        Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit,
        sed do <a href="#">eiusmod</a> tempor incididunt ut{' '}
        <a href="#">labore et</a> dolore magna aliqua.
      </Paragraph>
    </Division>
  ))

  .add('Link text', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Link heading', () => (
    <Division margin={{ all: 'large' }}>
      <h3>
        <Link heading href="#">
          Heading
        </Link>
      </h3>
    </Division>
  ))

  .add('Link reset', () => (
    <Division margin={{ all: 'large' }}>
      <Link reset href="#">
        Link
      </Link>
      <h3>
        <Link reset href="#">
          Heading
        </Link>
      </h3>
    </Division>
  ));
