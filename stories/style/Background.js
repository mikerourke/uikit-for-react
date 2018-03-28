import React from 'react';
import { storiesOf } from '@storybook/react';
import startCase from 'lodash/startCase';
import { Container, Base, Grid, Panel, Heading } from '../../src/components';
import { UIK } from '../../src/lib';
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
  ))

  .add('Attachment', () => (
    <Container margin={{ all: 'large' }}>
      <Base
        background={{
          imageUrl: imageLinks.dark,
          fixed: true,
          position: 'center-center',
        }}
        height="medium"
        width="large"
      />
    </Container>
  ))

  .add('Responsive', () => (
    <Container margin={{ all: 'large' }}>
      <Base
        background={{
          imageUrl: imageLinks.dark,
          breakpoint: '@m',
          color: 'muted',
          cover: true,
          position: 'top-right',
        }}
        height="medium"
        width="large"
        flex
        justifyContent="center"
        alignItems="middle"
      >
        <Heading as="p" size="h4" margin="remove" visible="@m" inverse="light">
          Image shown
        </Heading>
        <Heading as="p" size="h4" margin="remove" hidden="@m">
          Image not shown
        </Heading>
      </Base>
    </Container>
  ))

  .add('Blend modes', () => (
    <Container margin={{ all: 'large' }}>
      <Grid
        childWidth={{ default: '1/2', atSm: '1/3' }}
        inverse="light"
        gutter="small"
      >
        {UIK.BLEND_MODES.map(blendMode => (
          <Grid.Cell key={blendMode}>
            <Panel
              background={{
                imageUrl: imageLinks.photo,
                cover: true,
                color: 'primary',
                blendMode,
              }}
              height="small"
              flex
              justifyContent="center"
              alignItems="middle"
            >
              <Heading as="p" size="h4">
                {startCase(blendMode)}
              </Heading>
            </Panel>
          </Grid.Cell>
        ))}
      </Grid>
    </Container>
  ));
