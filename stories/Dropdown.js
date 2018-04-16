import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Division,
  Button,
  Dropdown,
  Grid,
  Nav,
  Panel,
} from '../src/components';

Dropdown.displayName = 'Dropdown';

const message = faker.lorem.paragraph();

const SharedNav = () => (
  <Nav>
    <Nav.Item active>Active</Nav.Item>
    <Nav.Item>Item</Nav.Item>
    <Nav.Header>Header</Nav.Header>
    <Nav.Item>Item</Nav.Item>
    <Nav.Item>Item</Nav.Item>
    <Nav.Divider />
    <Nav.Item>Item</Nav.Item>
  </Nav>
);

storiesOf('Dropdown', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Division inline>
        <Dropdown toggle={<Button>Hover</Button>}>{message}</Dropdown>
      </Division>
      <Division inline>
        <Dropdown mode="click" toggle={<Button>Click</Button>}>
          {message}
        </Dropdown>
      </Division>
    </Division>
  ))

  .add('Nav in dropdown', () => (
    <Division margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <SharedNav />
      </Dropdown>
    </Division>
  ))

  .add('Grid in dropdown', () => (
    <Division margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <Grid childWidth={{ atMd: '1/2' }}>
          <Grid.Cell>
            <SharedNav />
          </Grid.Cell>
          <Grid.Cell>
            <SharedNav />
          </Grid.Cell>
        </Grid>
      </Dropdown>
    </Division>
  ))

  .add('Position', () => (
    <Division margin={{ all: 'large' }} style={{ paddingTop: 300, height: 1000 }}>
      <Division inline>
        <Dropdown toggle={<Button>Top Right</Button>} position="top-right">
          <SharedNav />
        </Dropdown>
      </Division>
      <Division inline>
        <Dropdown
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
        >
          <SharedNav />
        </Dropdown>
      </Division>
      <Division inline>
        <Dropdown
          toggle={<Button>Right Center</Button>}
          position="right-center"
        >
          <SharedNav />
        </Dropdown>
      </Division>
    </Division>
  ))

  .add('Boundary', () => (
    <Division margin={{ all: 'large' }}>
      <Panel as={Dropdown.Boundary} placeholder width={{ atSm: '2/3' }}>
        <Button float="left">Hover</Button>
        <Dropdown>
          <SharedNav />
        </Dropdown>
        <Button float="right">Hover</Button>
        <Dropdown>
          <SharedNav />
        </Dropdown>
      </Panel>
    </Division>
  ))

  .add('Boundary alignment', () => (
    <Division margin={{ all: 'large' }}>
      <Panel as={Dropdown.Boundary} placeholder>
        <Button float="left">Justify</Button>
        <Dropdown position="bottom-justify" boundaryAlign>
          <SharedNav />
        </Dropdown>
        <Button float="right">Center</Button>
        <Dropdown position="bottom-center" boundaryAlign>
          <SharedNav />
        </Dropdown>
      </Panel>
    </Division>
  ))

  .add('Offset', () => (
    <Division margin={{ all: 'large' }}>
      <Button>Hover</Button>
      <Dropdown offset={80}>
        <SharedNav />
      </Dropdown>
    </Division>
  ))

  .add('Animation', () => (
    <Division margin={{ all: 'large' }}>
      <Button>Hover</Button>
      <Dropdown animation={{ name: 'slide-top-small', duration: 1000 }}>
        <SharedNav />
      </Dropdown>
    </Division>
  ))

  .add('Event handlers', () => (
    <Division margin={{ all: 'large' }}>
      <Dropdown
        toggle={<Button>Show</Button>}
        onBeforeShow={action('onToggle')}
        onShow={action('onShow')}
        onShown={action('onShown')}
        onBeforeHide={action('onBeforeHide')}
        onHide={action('onHide')}
        onHidden={action('onHidden')}
        onStack={action('onStack')}
      >
        {message}
      </Dropdown>
    </Division>
  ));
