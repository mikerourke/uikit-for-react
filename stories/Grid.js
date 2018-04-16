import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Division, Card, Grid, Margin } from '../src/components';

Grid.displayName = 'Grid';

storiesOf('Grid', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Gutter modifiers', () => (
    <Margin margin={{ all: 'large' }}>
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
          <Division background="muted" padding>
            Item
          </Division>
        </Grid.Cell>
        <Grid.Cell>
          <Division background="primary" padding inverse="light">
            Item
          </Division>
        </Grid.Cell>
        <Grid.Cell>
          <Division background="secondary" padding inverse="light">
            Item
          </Division>
        </Grid.Cell>
      </Grid>
    </Margin>
  ))

  .add('Nested grid', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Divider modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: 'expand' }} divider>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
        <Grid.Cell>{faker.lorem.paragraph()}</Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Match height', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Match only one cell', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('JavaScript', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Grid and width', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Child width', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Grid and flex', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ));
