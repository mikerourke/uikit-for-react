import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Block, Button, Card, Drop, Grid, Panel } from '../../src/components';

Drop.displayName = 'Drop';

const message = faker.lorem.paragraph();

storiesOf('Drop', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Block inline>
        <Drop toggle={<Button>Hover</Button>}>
          <Card>{message}</Card>
        </Drop>
      </Block>
      <Block inline>
        <Drop mode="click" toggle={<Button>Click</Button>}>
          <Card>{message}</Card>
        </Drop>
      </Block>
    </Block>
  ))

  .add('Grid in drop', () => (
    <Block margin={{ all: 'large' }}>
      <Drop toggle={<Button>Hover</Button>} width="large">
        <Card>
          <Grid childWidth={{ atMd: '1/2' }}>
            <Grid.Cell>{message}</Grid.Cell>
            <Grid.Cell>{message}</Grid.Cell>
          </Grid>
        </Card>
      </Drop>
    </Block>
  ))

  .add('Position', () => (
    <Block margin={{ all: 'large' }} viewport>
      <Block inline>
        <Drop toggle={<Button>Top Right</Button>} position="top-right">
          <Card>{message}</Card>
        </Drop>
      </Block>
      <Block inline>
        <Drop
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
        >
          <Card>{message}</Card>
        </Drop>
      </Block>
      <Block inline>
        <Drop toggle={<Button>Right Center</Button>} position="right-center">
          <Card>{message}</Card>
        </Drop>
      </Block>
    </Block>
  ))

  .add('Boundary', () => (
    <Block margin={{ all: 'large' }}>
      <Panel as={Drop.Boundary} placeholder width={{ atSm: '2/3' }}>
        <Button float="left">Hover</Button>
        <Drop boundaryAlign>
          <Card>{message}</Card>
        </Drop>
        <Button float="right">Hover</Button>
        <Drop boundaryAlign>
          <Card>{message}</Card>
        </Drop>
      </Panel>
    </Block>
  ))

  .add('Boundary alignment', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Offset', () => (
    <Block margin={{ all: 'large' }}>
      <Drop toggle={<Button>Hover</Button>} offset={80}>
        <Card>{message}</Card>
      </Drop>
    </Block>
  ))

  .add('Animation', () => (
    <Block margin={{ all: 'large' }}>
      <Drop
        toggle={<Button>Hover</Button>}
        animation={{ name: 'slide-top-small', duration: 1000 }}
      >
        <Card>{message}</Card>
      </Drop>
    </Block>
  ))

  .add('Event handlers', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ));
