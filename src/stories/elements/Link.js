import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Base, Link, List } from '../../components';

Link.displayName = 'Link';

storiesOf('Link', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Link href="#">Link</Link>
    </Base>
  ))

  .add('Link muted', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Link text', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Link reset', () => (
    <Base margin={{ all: 'large' }}>
      <Link reset href="#">
        Link
      </Link>
    </Base>
  ));
