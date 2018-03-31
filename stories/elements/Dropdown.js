import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Block,
  Button,
  Dropdown,
  Grid,
  Nav,
  Panel,
} from '../../src/components';

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

  .add('Nav in dropdown', () => (
    <Block margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>} width="large">
        <NavExample />
      </Dropdown>
    </Block>
  ))

  .add('Grid in dropdown', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Position', () => (
    <Block margin={{ all: 'large' }} style={{ paddingTop: 300 }}>
      <Block inline>
        <Dropdown toggle={<Button>Top Right</Button>} position="top-right">
          <NavExample />
        </Dropdown>
      </Block>
      <Block inline>
        <Dropdown
          toggle={<Button>Bottom Justify</Button>}
          position="bottom-justify"
        >
          <NavExample />
        </Dropdown>
      </Block>
      <Block inline>
        <Dropdown
          toggle={<Button>Right Center</Button>}
          position="right-center"
        >
          <NavExample />
        </Dropdown>
      </Block>
    </Block>
  ))

  .add('Boundary', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Boundary alignment', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Offset', () => (
    <Block margin={{ all: 'large' }}>
      <Button>Hover</Button>
      <Dropdown offset={80}>
        <NavExample />
      </Dropdown>
    </Block>
  ))

  .add('Animation', () => (
    <Block margin={{ all: 'large' }}>
      <Button>Hover</Button>
      <Dropdown animation={{ name: 'slide-top-small', duration: 1000 }}>
        <NavExample />
      </Dropdown>
    </Block>
  ))

  .add('Event handlers', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ));
