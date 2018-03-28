import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Base, Button, Dropdown, Grid, Nav, Panel } from '../../src/components';

Dropdown.displayName = 'Dropdown';

const message = faker.lorem.paragraph();

const NavExample = () => (
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

  .add('Nav in dropdown', () => (
    <Base margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <NavExample />
      </Dropdown>
    </Base>
  ))

  .add('Grid in dropdown', () => (
    <Base margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <Grid childWidth={{ atMd: '1/2' }}>
          <Grid.Cell>
            <NavExample />
          </Grid.Cell>
          <Grid.Cell>
            <NavExample />
          </Grid.Cell>
        </Grid>
      </Dropdown>
    </Base>
  ))

  .add('Position', () => (
    <Base margin={{ all: 'large' }} style={{ paddingTop: 300 }}>
      <Base inline>
        <Dropdown toggle={<Button>Top Right</Button>} position="top-right">
          <NavExample />
        </Dropdown>
      </Base>
      <Base inline>
        <Dropdown
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
        >
          <NavExample />
        </Dropdown>
      </Base>
      <Base inline>
        <Dropdown
          toggle={<Button>Right Center</Button>}
          position="right-center"
        >
          <NavExample />
        </Dropdown>
      </Base>
    </Base>
  ))

  .add('Boundary', () => (
    <Base margin={{ all: 'large' }}>
      <Panel as={Dropdown.Boundary} placeholder width={{ atSm: '2/3' }}>
        <Button float="left">Hover</Button>
        <Dropdown>
          <NavExample />
        </Dropdown>
        <Button float="right">Hover</Button>
        <Dropdown>
          <NavExample />
        </Dropdown>
      </Panel>
    </Base>
  ))

  .add('Boundary alignment', () => (
    <Base margin={{ all: 'large' }}>
      <Panel as={Dropdown.Boundary} placeholder>
        <Button float="left">Justify</Button>
        <Dropdown position="bottom-justify" boundaryAlign>
          <NavExample />
        </Dropdown>
        <Button float="right">Center</Button>
        <Dropdown position="bottom-center" boundaryAlign>
          <NavExample />
        </Dropdown>
      </Panel>
    </Base>
  ))

  .add('Offset', () => (
    <Base margin={{ all: 'large' }}>
      <Button>Hover</Button>
      <Dropdown offset={80}>
        <NavExample />
      </Dropdown>
    </Base>
  ))

  .add('Animation', () => (
    <Base margin={{ all: 'large' }}>
      <Button>Hover</Button>
      <Dropdown animation={{ name: 'slide-top-small', duration: 1000 }}>
        <NavExample />
      </Dropdown>
    </Base>
  ))

  .add('Event handlers', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ));
