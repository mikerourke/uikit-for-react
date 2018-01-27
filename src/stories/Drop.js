import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { BlockElement } from '../components/base';
import Button from '../components/elements/Button';
import Card from '../components/containers/Card';
import Drop from '../components/elements/Drop';
import Grid from '../components/layout/Grid';
import Container from '../components/layout/Container';

Drop.displayName = 'Drop';

const message = faker.lorem.paragraph();

storiesOf('Drop', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <BlockElement inline>
        <Drop toggle={<Button>Hover</Button>}>
          <Card>{message}</Card>
        </Drop>
      </BlockElement>
      <BlockElement inline>
        <Drop mode="click" toggle={<Button>Click</Button>}>
          <Card>{message}</Card>
        </Drop>
      </BlockElement>
    </Container>
  ))

  .add('Grid in drop', () => (
    <Container margin={{ all: 'large' }}>
      <Drop toggle={<Button>Hover</Button>} width="large">
        <Card>
          <Grid childWidth={{ atMd: '1/2' }}>
            <Grid.Cell>{message}</Grid.Cell>
            <Grid.Cell>{message}</Grid.Cell>
          </Grid>
        </Card>
      </Drop>
    </Container>
  ))

  .add('Position', () => (
    <Container margin={{ all: 'large' }}>
      <BlockElement inline>
        <Drop toggle={<Button>Top Right</Button>} position="top-right">
          <Card>{message}</Card>
        </Drop>
      </BlockElement>
      <BlockElement inline>
        <Drop
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
        >
          <Card>{message}</Card>
        </Drop>
      </BlockElement>
      <BlockElement inline>
        <Drop toggle={<Button>Right Center</Button>} position="right-center">
          <Card>{message}</Card>
        </Drop>
      </BlockElement>
    </Container>
  ))

  .add('Events', () => {
    const handleEvent = eventName => () => console.log(eventName);

    return (
      <Container margin={{ all: 'large' }}>
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
      </Container>
    );
  });
