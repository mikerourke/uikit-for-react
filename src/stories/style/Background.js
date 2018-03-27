import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Base, Grid, Panel, Heading } from '../../components';
import { imageLinks } from '../common';

storiesOf('Background', module)
  .add('Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }} textAlign="center">
        <Grid.Cell>
          <Panel padding background="default">
            <Heading as="h4">Default</Heading>
          </Panel>
        </Grid.Cell>
        <Grid.Cell>
          <Panel padding background="muted">
            <Heading as="h4">Muted</Heading>
          </Panel>
        </Grid.Cell>
        <Grid.Cell>
          <Panel padding background="primary" inverse="light">
            <Heading as="h4">Primary</Heading>
          </Panel>
        </Grid.Cell>
        <Grid.Cell>
          <Panel padding background="secondary" inverse="light">
            <Heading as="h4">Secondary</Heading>
          </Panel>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Size modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }} textAlign="center" inverse="light">
        <Grid.Cell>
          <Panel
            background={{ imageUrl: imageLinks.dark, cover: true }}
            height="medium"
            flex
            justifyContent="center"
            alignItems="middle"
          >
            <Heading as="h4">Default</Heading>
          </Panel>
        </Grid.Cell>
        <Grid.Cell>
          <Panel
            background={{ imageUrl: imageLinks.dark, contain: true }}
            height="medium"
            flex
            justifyContent="center"
            alignItems="middle"
          >
            <Heading as="h4">Contain</Heading>
          </Panel>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Position modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }} inverse="light">
        <Grid.Cell>
          <Panel
            background={{
              imageUrl: imageLinks.dark,
              cover: true,
              position: 'top-right',
            }}
            height="medium"
            flex
            justifyContent="center"
            alignItems="middle"
          >
            <Heading as="h4">Top Right</Heading>
          </Panel>
        </Grid.Cell>
        <Grid.Cell>
          <Panel
            background={{
              imageUrl: imageLinks.dark,
              cover: true,
              position: 'top-left',
            }}
            height="medium"
            flex
            justifyContent="center"
            alignItems="middle"
          >
            <Heading as="h4">Top Left</Heading>
          </Panel>
        </Grid.Cell>
      </Grid>
    </Container>
  ));
