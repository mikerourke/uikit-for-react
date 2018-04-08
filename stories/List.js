import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Grid, List } from '../../src/components';

List.displayName = 'List';

const SimpleList = props => (
  <List {...props}>
    <List.Item>List item 1</List.Item>
    <List.Item>List item 2</List.Item>
    <List.Item>List item 3</List.Item>
  </List>
);

const LargeList = props => (
  <Grid.Cell>
    <h4>{props.title}</h4>
    <SimpleList large {...props} />
  </Grid.Cell>
);

storiesOf('List', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <SimpleList />
    </Block>
  ))

  .add('Bullet modifier', () => (
    <Block margin={{ all: 'large' }}>
      <SimpleList bullet />
    </Block>
  ))

  .add('Divider modifier', () => (
    <Block margin={{ all: 'large' }}>
      <SimpleList divider />
    </Block>
  ))

  .add('Striped modifier', () => (
    <Block margin={{ all: 'large' }}>
      <SimpleList striped />
    </Block>
  ))

  .add('Large modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }}>
        <LargeList title="Default" />
        <LargeList title="Divider" divider />
        <LargeList title="Striped" striped />
        <LargeList title="Bullet" bullet />
      </Grid>
    </Block>
  ));
