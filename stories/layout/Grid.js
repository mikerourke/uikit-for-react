import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Base, Card, Grid } from '../../src/components';

Grid.displayName = 'Grid';

storiesOf('Grid', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Gutter modifiers', () => (
    <Base margin={{ all: 'large' }} dynamicMargin>
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
          <Base as="div" background="muted" padding>
            Item
          </Base>
        </Grid.Cell>
        <Grid.Cell>
          <Base as="div" background="primary" padding inverse="light">
            Item
          </Base>
        </Grid.Cell>
        <Grid.Cell>
          <Base as="div" background="secondary" padding inverse="light">
            Item
          </Base>
        </Grid.Cell>
      </Grid>
    </Base>
  ))

  .add('Nested grid', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Divider modifier', () => (
    <Base margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }} divider>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
      </Grid>
    </Base>
  ))

  .add('Match height', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Match only one cell', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('JavaScript', () => (
    <Base margin={{ all: 'large' }}>
      <Grid
        childWidth={{ atSm: 'expand' }}
        textAlign="center"
        heightMatch="target: > div > .uk-card"
      >
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
    </Base>
  ))

  .add('Grid and width', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Child width', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Grid and flex', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Component options', () => (
    <Base margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }}>
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
    </Base>
  ));
