import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Grid, List } from '../src/components';

List.displayName = 'List';

const SharedSimpleList = props => (
  <List {...props}>
    <List.Item>List item 1</List.Item>
    <List.Item>List item 2</List.Item>
    <List.Item>List item 3</List.Item>
  </List>
);

const SharedLargeList = props => (
  <Grid.Cell>
    <h4>{props.title}</h4>
    <SharedSimpleList large {...props} />
  </Grid.Cell>
);

storiesOf('List', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <SharedSimpleList />
    </Block>
  ))

  .add('Bullet modifier', () => (
    <Block margin={{ all: 'large' }}>
      <SharedSimpleList bullet />
    </Block>
  ))

  .add('Divider modifier', () => (
    <Block margin={{ all: 'large' }}>
      <SharedSimpleList divider />
    </Block>
  ))

  .add('Striped modifier', () => (
    <Block margin={{ all: 'large' }}>
      <SharedSimpleList striped />
    </Block>
  ))

  .add('Large modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }}>
        <SharedLargeList title="Default" />
        <SharedLargeList title="Divider" divider />
        <SharedLargeList title="Striped" striped />
        <SharedLargeList title="Bullet" bullet />
      </Grid>
    </Block>
  ));
