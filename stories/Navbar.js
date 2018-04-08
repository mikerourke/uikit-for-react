/* eslint-disable no-script-url */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Icon,
  Block,
  Navbar,
  Nav,
  Dropdown,
  Image,
  Logo,
  Input,
  Button,
} from '../../src/components';
import { imageLinks } from '../common';

Navbar.displayName = 'Navbar';

const ExampleNavbar = () => (
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

const ExampleNavSection = props => (
  <Navbar.Section {...props}>
    <ExampleNavbar />
  </Navbar.Section>
);

storiesOf('Navbar', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Navbar container>
        <ExampleNavSection location="left" />
      </Navbar>
    </Block>
  ))

  .add('Multiple navigations', () => (
    <Block margin={{ all: 'large' }}>
      <Navbar container>
        <ExampleNavSection location="left" />
        <ExampleNavSection location="right" />
      </Navbar>
    </Block>
  ))

  .add('Click mode', () => (
    <Block margin={{ all: 'large' }}>
      <Navbar container margin mode="click">
        <ExampleNavSection location="left" />
      </Navbar>
    </Block>
  ))

  .add('Transparent modifier', () => (
    <Block margin={{ all: 'large' }} position="relative">
      <Image src={imageLinks.light} />
      <Block position="top">
        <Navbar container transparent>
          <ExampleNavSection location="left" />
        </Navbar>
      </Block>
    </Block>
  ))

  .add('Subtitle', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Content item', () => (
    <Block margin={{ all: 'large' }}>
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
              <Input formWidth="small" placeholder="Input" type="text" />
              <Button>Button</Button>
            </form>
          </Navbar.Item>
        </Navbar.Section>
      </Navbar>
    </Block>
  ))

  .add('Centered logo', () => (
    <Block margin={{ all: 'large' }}>
      <Navbar container margin>
        <Navbar.Section location="center">
          <Navbar.Split side="left">
            <ExampleNavbar />
          </Navbar.Split>
          <Navbar.Item as={Logo}>Logo</Navbar.Item>
          <Navbar.Split side="right">
            <Nav>
              <Nav.Item>Item</Nav.Item>
            </Nav>
          </Navbar.Split>
        </Navbar.Section>
      </Navbar>
    </Block>
  ))

  .add('Dropdowns', () => (
    <Block margin={{ all: 'large' }}>
      {['left', 'right'].map(location => (
        <Navbar container key={location}>
          <Navbar.Section location={location}>
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
        </Navbar>
      ))}
    </Block>
  ));
