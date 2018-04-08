import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Link, List, Paragraph } from '../src/components';

Link.displayName = 'Link';

storiesOf('Link', module)
  .add('Link muted', () => (
    <Block margin={{ all: 'large' }}>
      <Link href="#" muted>
        Link
      </Link>
      <Paragraph linkStyle="muted">
        Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit,
        sed do <a href="#">eiusmod</a> tempor incididunt ut{' '}
        <a href="#">labore et</a> dolore magna aliqua.
      </Paragraph>
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

  .add('Link heading', () => (
    <Block margin={{ all: 'large' }}>
      <h3>
        <Link heading href="#">
          Heading
        </Link>
      </h3>
    </Block>
  ))

  .add('Link reset', () => (
    <Block margin={{ all: 'large' }}>
      <Link reset href="#">
        Link
      </Link>
      <h3>
        <Link reset href="#">
          Heading
        </Link>
      </h3>
    </Block>
  ));
