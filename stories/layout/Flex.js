/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Card, Flex, Grid } from '../../src/components';
import { imageLinks } from '../common';

Flex.displayName = 'Flex';

storiesOf('Flex', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Flex>
        <Card>Item 1</Card>
        <Card margin="left">Item 2</Card>
        <Card margin="left">Item 3</Card>
      </Flex>
    </Block>
  ))

  .add('Horizontal alignment', () => (
    <Block margin={{ all: 'large' }}>
      <Flex alignItems="center">
        <Card>Item 1</Card>
        <Card margin="left">Item 2</Card>
        <Card margin="left">Item 3</Card>
      </Flex>
    </Block>
  ))

  .add('Responsive', () => (
    <Block margin={{ all: 'large' }}>
      <Flex justifyContent={{ atMd: 'center', atLg: 'right' }}>
        <Card>Item 1</Card>
        <Card margin="left">Item 2</Card>
        <Card margin="left">Item 3</Card>
      </Flex>
    </Block>
  ))

  .add('Vertical alignment', () => (
    <Block margin={{ all: 'large' }}>
      <Flex alignItems="middle" textAlign="center">
        <Card>Item 1</Card>
        <Card margin="left">Item 2</Card>
        <Card margin="left">Item 3</Card>
      </Flex>
    </Block>
  ))

  .add('Direction modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Flex direction="column" width="1/3">
        <Card>Item 1</Card>
        <Card margin="top">Item 2</Card>
        <Card margin="top">Item 3</Card>
      </Flex>
    </Block>
  ))

  .add('Wrap modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Flex
        wrap={{ type: 'wrap', alignment: 'around' }}
        background="muted"
        height="medium"
      >
        <Card size="small" width="1/3">
          Item 1
        </Card>
        <Card size="small" width="1/2" margin="left">
          Item 2
        </Card>
        <Card size="small" width="1/3">
          Item 3
        </Card>
        <Card size="small" width="1/3" margin="left">
          Item 4
        </Card>
        <Card size="small" width="1/2">
          Item 5
        </Card>
        <Card size="small" width="1/3" margin="left">
          Item 6
        </Card>
      </Flex>
    </Block>
  ))

  .add('Item order', () => (
    <Block margin={{ all: 'large' }}>
      <Flex>
        <Card order="last" margin="left">
          Item 1
        </Card>
        <Card order="first">Item 2</Card>
        <Card margin="left">Item 3</Card>
      </Flex>
    </Block>
  ))

  .add('Flex and grid', () => (
    <Block margin={{ all: 'large' }}>
      <Grid alignItems="middle">
        <Grid.Cell width={{ atMd: '2/3' }}>
          <p>{faker.lorem.paragraph()}</p>
        </Grid.Cell>
        <Grid.Cell width={{ atMd: '1/3' }} order="first">
          <img src={imageLinks.light} alt="Image" />
        </Grid.Cell>
      </Grid>
    </Block>
  ));
