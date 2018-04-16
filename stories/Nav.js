import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Division,
  Button,
  Card,
  Dropdown,
  Icon,
  Nav,
  Navbar,
  Offcanvas,
} from '../src/components';

Nav.displayName = 'Nav';

storiesOf('Nav', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Division width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Division>
    </Division>
  ))

  .add('Nested navs', () => (
    <Division margin={{ all: 'large' }}>
      <Division width={{ atSm: '1/2', atMd: '2/5' }}>
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
      </Division>
    </Division>
  ))

  .add('Accordion', () => (
    <Division margin={{ all: 'large' }}>
      <Division width={{ atSm: '1/2', atMd: '2/5' }}>
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
      </Division>
    </Division>
  ))

  .add('Multiple open subnavs', () => (
    <Division margin={{ all: 'large' }}>
      <Division width={{ atSm: '1/2', atMd: '2/5' }}>
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
      </Division>
    </Division>
  ))

  .add('Header and divider', () => (
    <Division margin={{ all: 'large' }}>
      <Division width={{ atSm: '1/2', atMd: '2/5' }}>
        <Nav>
          <Nav.Header>Header</Nav.Header>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Divider />
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Division>
    </Division>
  ))

  .add('Default modifier', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Primary modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Division width={{ atSm: '1/2' }}>
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
      </Division>
    </Division>
  ))

  .add('Center modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Card width={{ atSm: '1/2' }}>
        <Nav center accordion>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Card>
    </Division>
  ))

  .add('Nav in Dropdown', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Nav in Navbar', () => (
    <Division margin={{ all: 'large' }}>
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
    </Division>
  ))

  .add('Nav in Offcanvas', () => (
    <Division margin={{ all: 'large' }}>
      <Offcanvas.Content>
        <Offcanvas.Toggle as={Button}>Open</Offcanvas.Toggle>
        <Offcanvas>
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
      </Offcanvas.Content>
    </Division>
  ));
