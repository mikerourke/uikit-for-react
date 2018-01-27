import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { BlockElement } from '../components/base';
import Button from '../components/elements/Button';
import Dropdown from '../components/elements/Dropdown';
import Grid from '../components/layout/Grid';
import Container from '../components/layout/Container';

Dropdown.displayName = 'Dropdown';

const message = faker.lorem.paragraph();

storiesOf('Dropdown', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <BlockElement inline>
        <Dropdown toggle={<Button>Hover</Button>}>{message}</Dropdown>
      </BlockElement>
      <BlockElement inline>
        <Dropdown mode="click" toggle={<Button>Click</Button>}>
          {message}
        </Dropdown>
      </BlockElement>
    </Container>
  ))

  .add('Grid in dropdown', () => (
    <Container margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <Grid childWidth={{ atMd: '1/2' }}>
          <Grid.Cell>{message}</Grid.Cell>
          <Grid.Cell>{message}</Grid.Cell>
        </Grid>
      </Dropdown>
    </Container>
  ))

  .add('Position', () => (
    <Container margin={{ all: 'large' }}>
      <BlockElement inline>
        <Dropdown toggle={<Button>Top Right</Button>} position="top-right">
          {message}
        </Dropdown>
      </BlockElement>
      <BlockElement inline>
        <Dropdown
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
          animation={{ name: ['slide-right', 'fade'] }}
        >
          {message}
        </Dropdown>
      </BlockElement>
      <BlockElement inline>
        <Dropdown
          toggle={<Button>Right Center</Button>}
          position="right-center"
        >
          {message}
        </Dropdown>
      </BlockElement>
    </Container>
  ))

  .add('Events', () => {
    const handleEvent = eventName => () => console.log(eventName);

    return (
      <Container margin={{ all: 'large' }}>
        <Dropdown
          toggle={<Button>Top Right</Button>}
          onBeforeShow={handleEvent('onToggle')}
          onShow={handleEvent('onShow')}
          onShown={handleEvent('onShown')}
          onBeforeHide={handleEvent('onBeforeHide')}
          onHide={handleEvent('onHide')}
          onHidden={handleEvent('onHidden')}
          onStack={handleEvent('onStack')}
        >
          {message}
        </Dropdown>
      </Container>
    );
  });
