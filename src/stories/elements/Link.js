import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Block, Inline, Link, List } from '../../components';

Link.displayName = 'Link';

storiesOf('Link', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Link href="#">Link</Link>
    </Block>
  ))

  .add('Link muted', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Link text', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Link reset', () => (
    <Block margin={{ all: 'large' }}>
      <Link reset href="#">
        Link
      </Link>
    </Block>
  ));
