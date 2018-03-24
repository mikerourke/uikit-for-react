import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Base, Button, Dropdown, Grid } from '../../components';

Dropdown.displayName = 'Dropdown';

const message = faker.lorem.paragraph();

storiesOf('Dropdown', module)
  .add('Basic Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Base inline>
        <Dropdown toggle={<Button>Hover</Button>}>{message}</Dropdown>
      </Base>
      <Base inline>
        <Dropdown mode="click" toggle={<Button>Click</Button>}>
          {message}
        </Dropdown>
      </Base>
    </Base>
  ))

  .add('Grid in dropdown', () => (
    <Base margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <Grid childWidth={{ atMd: '1/2' }}>
          <Grid.Cell>{message}</Grid.Cell>
          <Grid.Cell>{message}</Grid.Cell>
        </Grid>
      </Dropdown>
    </Base>
  ))

  .add('Position', () => (
    <Base margin={{ all: 'large' }}>
      <Base inline>
        <Dropdown toggle={<Button>Top Right</Button>} position="top-right">
          {message}
        </Dropdown>
      </Base>
      <Base inline>
        <Dropdown
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
          animation={{ name: ['slide-right', 'fade'] }}
        >
          {message}
        </Dropdown>
      </Base>
      <Base inline>
        <Dropdown
          toggle={<Button>Right Center</Button>}
          position="right-center"
        >
          {message}
        </Dropdown>
      </Base>
    </Base>
  ))

  .add('Events', () => {
    const handleEvent = eventName => () => console.log(eventName);

    return (
      <Base margin={{ all: 'large' }}>
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
      </Base>
    );
  });
