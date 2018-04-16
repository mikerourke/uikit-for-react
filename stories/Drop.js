import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Division, Button, Card, Drop, Grid, Panel } from '../src/components';

Drop.displayName = 'Drop';

const message = faker.lorem.paragraph();

storiesOf('Drop', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Division inline>
        <Drop toggle={<Button type="button">Hover</Button>}>
          <Card>{message}</Card>
        </Drop>
      </Division>
      <Division inline>
        <Drop mode="click" toggle={<Button type="button">Click</Button>}>
          <Card>{message}</Card>
        </Drop>
      </Division>
    </Division>
  ))

  .add('Grid in drop', () => (
    <Division margin={{ all: 'large' }}>
      <Drop toggle={<Button>Hover</Button>} width="large">
        <Card>
          <Grid childWidth={{ atMd: '1/2' }}>
            <Grid.Cell>{message}</Grid.Cell>
            <Grid.Cell>{message}</Grid.Cell>
          </Grid>
        </Card>
      </Drop>
    </Division>
  ))

  .add('Position', () => (
    <Division margin={{ all: 'large' }} viewport style={{ paddingTop: 300 }}>
      <Division inline>
        <Drop toggle={<Button>Top Right</Button>} position="top-right">
          <Card>{message}</Card>
        </Drop>
      </Division>
      <Division inline>
        <Drop
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
        >
          <Card>{message}</Card>
        </Drop>
      </Division>
      <Division inline>
        <Drop toggle={<Button>Right Center</Button>} position="right-center">
          <Card>{message}</Card>
        </Drop>
      </Division>
    </Division>
  ))

  .add('Boundary', () => (
    <Division margin={{ all: 'large' }}>
      <Panel as={Drop.Boundary} placeholder width={{ atSm: '2/3' }}>
        <Button float="left">Hover</Button>
        <Drop>
          <Card>{message}</Card>
        </Drop>
        <Button float="right">Hover</Button>
        <Drop>
          <Card>{message}</Card>
        </Drop>
      </Panel>
    </Division>
  ))

  .add('Boundary alignment', () => (
    <Division margin={{ all: 'large' }}>
      <Panel as={Drop.Boundary} placeholder>
        <Button float="left">Justify</Button>
        <Drop boundaryAlign position="bottom-justify">
          <Card>{message}</Card>
        </Drop>
        <Button float="right">Center</Button>
        <Drop boundaryAlign position="bottom-center">
          <Card>{message}</Card>
        </Drop>
      </Panel>
    </Division>
  ))

  .add('Offset', () => (
    <Division margin={{ all: 'large' }}>
      <Drop toggle={<Button>Hover</Button>} offset={80}>
        <Card>{message}</Card>
      </Drop>
    </Division>
  ))

  .add('Animation', () => (
    <Division margin={{ all: 'large' }}>
      <Drop
        toggle={<Button>Hover</Button>}
        animation={{ name: 'slide-top-small', duration: 1000 }}
      >
        <Card>{message}</Card>
      </Drop>
    </Division>
  ))

  .add('Event handlers', () => (
    <Division margin={{ all: 'large' }}>
      <Drop
        toggle={<Button>Show</Button>}
        onBeforeShow={action('onToggle')}
        onShow={action('onShow')}
        onShown={action('onShown')}
        onBeforeHide={action('onBeforeHide')}
        onHide={action('onHide')}
        onHidden={action('onHidden')}
        onStack={action('onStack')}
      >
        <Card>{message}</Card>
      </Drop>
    </Division>
  ));
