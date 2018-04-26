import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Close,
  Division,
  Navbar,
  Search,
  Logo,
  Nav,
  Toggle,
  Overlay,
} from '../src/components';

Search.displayName = 'Search';

storiesOf('Search', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Search>
        <Search.Input />
      </Search>
    </Division>
  ))

  .add('Search icon', () => (
    <Division margin={{ all: 'large' }}>
      <Division margin>
        <Search>
          <Search.Icon />
          <Search.Input />
        </Search>
      </Division>
      <Division margin>
        <Search>
          <Search.Icon flip />
          <Search.Input />
        </Search>
      </Division>
    </Division>
  ))

  .add('Clickable', () => (
    <Division margin={{ all: 'large' }}>
      <Division margin>
        <Search>
          <Search.Icon as="a" />
          <Search.Input />
        </Search>
      </Division>
      <Division margin>
        <Search>
          <Search.Icon as="a" flip />
          <Search.Input />
        </Search>
      </Division>
    </Division>
  ))

  .add('Default modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Search>
        <Search.Icon />
        <Search.Input />
      </Search>
    </Division>
  ))

  .add('Large modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Search large>
        <Search.Icon />
        <Search.Input />
      </Search>
    </Division>
  ))

  .add('Navbar modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar.Container>
        <Navbar.Section location="left">
          <Navbar.Item>
            <Search>
              <Search.Icon />
              <Search.Input />
            </Search>
          </Navbar.Item>
        </Navbar.Section>
      </Navbar.Container>
    </Division>
  ))

  .add('Toggle', () => (
    <Division margin={{ all: 'large' }}>
      <Search.Icon as="a" toggle />
    </Division>
  ))

  .add('Search in navbar', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar.Container>
        <Navbar.Section location="left">
          <Search>
            <Search.Icon />
            <Search.Input />
          </Search>
        </Navbar.Section>
      </Navbar.Container>
    </Division>
  ))

  .add('Overlay', () => (
    <Division margin={{ all: 'large' }}>
      <Navbar.Container as={Toggle.Togglable} margin>
        <Navbar>
          <Navbar.Section location="left">
            <Navbar.Item as={Logo}>Logo</Navbar.Item>
            <Nav>
              <Nav.Item active>Active</Nav.Item>
              <Nav.Item>Item</Nav.Item>
            </Nav>
          </Navbar.Section>
          <Navbar.Section location="right">
            <Navbar.Toggle search toggleAnimation="fade" />
          </Navbar.Section>
        </Navbar>
      </Navbar.Container>
    </Division>
  ));
