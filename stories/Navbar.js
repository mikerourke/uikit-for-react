/* eslint-disable no-script-url */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Division,
  Button,
  Dropdown,
  Icon,
  Image,
  Input,
  Logo,
  Nav,
  Navbar,
  Span,
} from '../src/components';
import { imageLinks } from './common';

Navbar.displayName = 'Navbar';

const SharedNav = () => (
  <Nav>
    <Nav.Item active>Active</Nav.Item>
    <Nav.Item parent title="Parent">
      <Dropdown>
        <Nav>
          <Nav.Item active>Active</Nav.Item>
          <Nav.Item>Item</Nav.Item>
          <Nav.Item>Item</Nav.Item>
        </Nav>
      </Dropdown>
    </Nav.Item>
    <Nav.Item>Item</Nav.Item>
  </Nav>
);

const SharedNavSection = props => (
  <Navbar.Section {...props}>
    <SharedNav />
  </Navbar.Section>
);

storiesOf('Navbar', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container>
        <SharedNavSection location="left" />
      </Navbar>
    </Division>
  ))

  .add('Multiple navigations', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container>
        <SharedNavSection location="left" />
        <SharedNavSection location="right" />
      </Navbar>
    </Division>
  ))

  .add('Click mode', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container margin mode="click">
        <SharedNavSection location="left" />
      </Navbar>
    </Division>
  ))

  .add('Transparent modifier', () => (
    <Division margin={{ all: 'large' }} position="relative">
      <Image src={imageLinks.light} />
      <Division position="top">
        <Navbar container transparent>
          <SharedNavSection location="left" />
        </Navbar>
      </Division>
    </Division>
  ))

  .add('Subtitle', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container>
        <Navbar.Section location="left">
          <Nav>
            <Nav.Item active>
              <div>
                Active <Navbar.Subtitle>Subtitle</Navbar.Subtitle>
              </div>
            </Nav.Item>
            <Nav.Item
              title={
                <div>
                  Parent <Navbar.Subtitle>Subtitle</Navbar.Subtitle>
                </div>
              }
            >
              <Dropdown>
                <Nav>
                  <Nav.Item active>Active</Nav.Item>
                  <Nav.Item>Item</Nav.Item>
                  <Nav.Item>Item</Nav.Item>
                </Nav>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <div>
                Item <Navbar.Subtitle>Subtitle</Navbar.Subtitle>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Section>
      </Navbar>
    </Division>
  ))

  .add('Content item', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container margin>
        <Navbar.Section location="left">
          <Navbar.Item as={Logo}>Logo</Navbar.Item>
          <Nav>
            <Nav.Item>
              <Icon margin={{ right: 'small' }} name="star" />
              Features
            </Nav.Item>
          </Nav>
          <Navbar.Item>
            <div>
              Some <a href="#">Link</a>
            </div>
          </Navbar.Item>
          <Navbar.Item>
            <form action="javascript:void(0)">
              <Input width="small" placeholder="Input" type="text" />
              <Button>Button</Button>
            </form>
          </Navbar.Item>
        </Navbar.Section>
      </Navbar>
    </Division>
  ))

  .add('Centered logo', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container margin>
        <Navbar.Section location="center">
          <Navbar.Split side="left">
            <SharedNav />
          </Navbar.Split>
          <Navbar.Item as={Logo}>Logo</Navbar.Item>
          <Navbar.Split side="right">
            <Nav>
              <Nav.Item>Item</Nav.Item>
            </Nav>
          </Navbar.Split>
        </Navbar.Section>
      </Navbar>
    </Division>
  ))

  .add('Toggle item', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container margin>
        <Navbar.Section location="left">
          <Navbar.Toggle />
        </Navbar.Section>
      </Navbar>
      <Navbar container margin>
        <Navbar.Section location="left">
          <Navbar.Toggle title={<Span margin={{ left: 'small' }}>Menu</Span>} />
        </Navbar.Section>
      </Navbar>
    </Division>
  ))

  .add('Dropdowns', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar container>
        {['left', 'right'].map(location => (
          <Navbar.Section key={location} location={location}>
            <Nav>
              <Nav.Item active>Active</Nav.Item>
              <Nav.Item parent title="Parent">
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
        ))}
      </Navbar>
    </Division>
  ));
