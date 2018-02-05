import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Button, Dropdown, Grid } from '../../components';

Dropdown.displayName = 'Dropdown';

const message = faker.lorem.paragraph();

storiesOf('Dropdown', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Block inline>
        <Dropdown toggle={<Button>Hover</Button>}>{message}</Dropdown>
      </Block>
      <Block inline>
        <Dropdown mode="click" toggle={<Button>Click</Button>}>
          {message}
        </Dropdown>
      </Block>
    </Block>
  ))

  .add('Grid in dropdown', () => (
    <Block margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <Grid childWidth={{ atMd: '1/2' }}>
          <Grid.Cell>{message}</Grid.Cell>
          <Grid.Cell>{message}</Grid.Cell>
        </Grid>
      </Dropdown>
    </Block>
  ))

  .add('Position', () => (
    <Block margin={{ all: 'large' }}>
      <Block inline>
        <Dropdown toggle={<Button>Top Right</Button>} position="top-right">
          {message}
        </Dropdown>
      </Block>
      <Block inline>
        <Dropdown
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
          animation={{ name: ['slide-right', 'fade'] }}
        >
          {message}
        </Dropdown>
      </Block>
      <Block inline>
        <Dropdown
          toggle={<Button>Right Center</Button>}
          position="right-center"
        >
          {message}
        </Dropdown>
      </Block>
    </Block>
  ))

  .add('Events', () => {
    const handleEvent = eventName => () => console.log(eventName);

    return (
      <Block margin={{ all: 'large' }}>
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
      </Block>
    );
  });
