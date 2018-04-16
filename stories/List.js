import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Grid, List } from '../src/components';

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
    <Division margin={{ all: 'large' }}>
      <SharedSimpleList />
    </Division>
  ))

  .add('Bullet modifier', () => (
    <Division margin={{ all: 'large' }}>
      <SharedSimpleList bullet />
    </Division>
  ))

  .add('Divider modifier', () => (
    <Division margin={{ all: 'large' }}>
      <SharedSimpleList divider />
    </Division>
  ))

  .add('Striped modifier', () => (
    <Division margin={{ all: 'large' }}>
      <SharedSimpleList striped />
    </Division>
  ))

  .add('Large modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }}>
        <SharedLargeList title="Default" />
        <SharedLargeList title="Divider" divider />
        <SharedLargeList title="Striped" striped />
        <SharedLargeList title="Bullet" bullet />
      </Grid>
    </Division>
  ));
