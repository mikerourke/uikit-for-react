import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Block,
  Button,
  Card,
  Dropdown,
  Icon,
  Nav,
  Navbar,
  Offcanvas,
} from '../../src/components';

Nav.displayName = 'Nav';

storiesOf('Nav', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Block>
    </Block>
  ))

  .add('Nested navs', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item title="Sub item">
                <Nav>
                  <Nav.Item>Sub item</Nav.Item>
                  <Nav.Item>Sub item</Nav.Item>
                </Nav>
              </Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
        </Nav>
      </Block>
    </Block>
  ))

  .add('Accordion', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav accordion>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item title="Sub item">
                <Nav>
                  <Nav.Item>Sub item</Nav.Item>
                  <Nav.Item>Sub item</Nav.Item>
                </Nav>
              </Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item>Sub item</Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
        </Nav>
      </Block>
    </Block>
  ))

  .add('Multiple open subnavs', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav accordion multiple>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item title="Sub item">
                <Nav>
                  <Nav.Item>Sub item</Nav.Item>
                  <Nav.Item>Sub item</Nav.Item>
                </Nav>
              </Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item>Sub item</Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
        </Nav>
      </Block>
    </Block>
  ))

  .add('Header and divider', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav>
          <Nav.Header>Header</Nav.Header>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Divider />
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Block>
    </Block>
  ))

  .add('Default modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Card width={{ atSm: '1/2' }}>
        <Nav accordion>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item>Sub item</Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item>Sub item</Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
          <Nav.Header>Header</Nav.Header>
          <Nav.Item>
            <Icon name="table" margin={{ right: 'small' }} /> Item
          </Nav.Item>
          <Nav.Item>
            <Icon name="thumbnails" margin={{ right: 'small' }} /> Item
          </Nav.Item>
          <Nav.Divider />
          <Nav.Item>
            <Icon name="trash" margin={{ right: 'small' }} /> Item
          </Nav.Item>
        </Nav>
      </Card>
    </Block>
  ))

  .add('Primary modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/2' }}>
        <Nav primary accordion>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item>Sub item</Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
          <Nav.Item parent title="Parent">
            <Nav.Subnav>
              <Nav.Item>Sub item</Nav.Item>
              <Nav.Item>Sub item</Nav.Item>
            </Nav.Subnav>
          </Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Block>
    </Block>
  ))

  .add('Center modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Card width={{ atSm: '1/2' }}>
        <Nav center accordion>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Card>
    </Block>
  ))

  .add('Nav in Dropdown', () => (
    <Block margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Hover</Button>}>
        <Nav>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Header>Header</Nav.Header>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Divider />
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Dropdown>
    </Block>
  ))

  .add('Nav in Navbar', () => (
    <Block margin={{ all: 'large' }}>
      <Navbar container>
        <Navbar.Section location="left">
          <Nav>
            <Nav.Item title="Parent">
              <Dropdown>
                <Nav>
                  <Nav.Item active>Active</Nav.Item>
                  <Nav.Item>Item</Nav.Item>
                  <Nav.Header>Header</Nav.Header>
                  <Nav.Item>Item</Nav.Item>
                  <Nav.Item>Item</Nav.Item>
                  <Nav.Divider />
                  <Nav.Item>Item</Nav.Item>
                </Nav>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Section>
      </Navbar>
    </Block>
  ))

  .add('Nav in Offcanvas', () => (
    <Block margin={{ all: 'large' }}>
      <Offcanvas toggle={<Button>Open</Button>}>
        <Offcanvas.Bar>
          <Nav>
            <Nav.Item active>Active</Nav.Item>
            <Nav.Item>Item</Nav.Item>
            <Nav.Header>Header</Nav.Header>
            <Nav.Item>Item</Nav.Item>
            <Nav.Item>Item</Nav.Item>
            <Nav.Divider />
            <Nav.Item>Item</Nav.Item>
          </Nav>
        </Offcanvas.Bar>
      </Offcanvas>
    </Block>
  ));
