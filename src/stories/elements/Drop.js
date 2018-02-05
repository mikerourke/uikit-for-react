import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Button, Card, Drop, Grid } from '../../components';

Drop.displayName = 'Drop';

const message = faker.lorem.paragraph();

storiesOf('Drop', module)
  .add('Basic Usage', () => (
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
    <Block margin={{ all: 'large' }}>
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

  .add('Events', () => {
    const handleEvent = eventName => () => console.log(eventName);

    return (
      <Block margin={{ all: 'large' }}>
        <Drop
          toggle={<Button>Top Right</Button>}
          onBeforeShow={handleEvent('onToggle')}
          onShow={handleEvent('onShow')}
          onShown={handleEvent('onShown')}
          onBeforeHide={handleEvent('onBeforeHide')}
          onHide={handleEvent('onHide')}
          onHidden={handleEvent('onHidden')}
          onStack={handleEvent('onStack')}
        >
          <Card>{message}</Card>
        </Drop>
      </Block>
    );
  });
