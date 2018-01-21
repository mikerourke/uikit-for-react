import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { BlockElement } from '../components/Base';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Container from '../components/Container';

Grid.displayName = 'Grid';

storiesOf('Grid', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }} textAlign="center">
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Gutter modifiers', () => (
    <Container margin={{ all: 'large' }} nextRow={{ spacing: 'large' }}>
      {['small', 'medium', 'large'].map(gutter => (
        <Grid
          key={gutter}
          gutter={gutter}
          childWidth={{ atSm: 'expand' }}
          textAlign="center"
        >
          <Grid.Cell>
            <Card>Item</Card>
          </Grid.Cell>
          <Grid.Cell>
            <Card>Item</Card>
          </Grid.Cell>
          <Grid.Cell>
            <Card>Item</Card>
          </Grid.Cell>
        </Grid>
      ))}
      <Grid
        gutter="collapse"
        childWidth={{ atSm: 'expand' }}
        textAlign="center"
      >
        <Grid.Cell>
          <BlockElement as="div" background="muted" padding>
            Item
          </BlockElement>
        </Grid.Cell>
        <Grid.Cell>
          <BlockElement as="div" background="primary" padding inverse="light">
            Item
          </BlockElement>
        </Grid.Cell>
        <Grid.Cell>
          <BlockElement as="div" background="secondary" padding inverse="light">
            Item
          </BlockElement>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Nested grid', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth="1/2" textAlign="center">
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Grid childWidth="1/2" textAlign="center">
            <Grid.Cell>
              <Card primary>Item</Card>
            </Grid.Cell>
            <Grid.Cell>
              <Card primary>Item</Card>
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Divider modifier', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }} divider>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Match height', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }} textAlign="center" matchHeight>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>
            Item<br />...
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>
            Item<br />...<br />...
          </Card>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Match only one cell', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }}>
        <Grid.Cell matchHeight>
          <Card>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <h3>Heading</h3>
          <p>{faker.lorem.paragraph()}</p>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Grids and width', () => (
    <Container margin={{ all: 'large' }}>
      <Grid textAlign="center">
        <Grid.Cell width={{ atMd: 'auto' }}>
          <Card>Auto</Card>
        </Grid.Cell>
        <Grid.Cell width={{ atMd: '1/3' }}>
          <Card>1-3</Card>
        </Grid.Cell>
        <Grid.Cell width={{ atMd: 'expand' }}>
          <Card>Expand</Card>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Child width', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2', atMd: '1/3' }} textAlign="center">
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Grid and flex', () => (
    <Container margin={{ all: 'large' }}>
      <Grid
        gutter="small"
        childWidth={{ atSm: '1/4' }}
        justifyContent="center"
        textAlign="center"
      >
        <Grid.Cell>
          <Card>Item 1</Card>
        </Grid.Cell>
        <Grid.Cell order="last">
          <Card secondary>Item 2</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item 3</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item 4</Card>
        </Grid.Cell>
        <Grid.Cell order="first">
          <Card primary>Item 5</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item 6</Card>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Component attributes', () => (
    <Container margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }} nextRow={{ spacing: 'large' }}>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>Item</Card>
        </Grid.Cell>
      </Grid>
    </Container>
  ));
