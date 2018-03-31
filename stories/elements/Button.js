import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Block,
  Button,
  Dropdown,
  Icon,
  Margin,
  Nav,
} from '../../src/components';

Button.displayName = 'Button';

storiesOf('Button', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Button as="a" margin={{ right: 'small' }}>
        Link
      </Button>
      <Button margin={{ right: 'small' }}>Button</Button>
      <Button disabled>Disabled</Button>
    </Block>
  ))

  .add('Style modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Margin as="p">
        <Button margin="right">Default</Button>
        <Button margin="right" primary>
          Primary
        </Button>
        <Button margin="right" secondary>
          Secondary
        </Button>
        <Button margin="right" danger>
          Danger
        </Button>
        <Button margin="right" text>
          Text
        </Button>
        <Button margin="right" link>
          Link
        </Button>
      </Margin>
    </Block>
  ))

  .add('Size modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Block margin>
        <Button size="small" margin={{ right: 'small' }}>
          Small button
        </Button>
        <Button size="small" primary margin={{ right: 'small' }}>
          Small button
        </Button>
        <Button size="small" secondary margin={{ right: 'small' }}>
          Small button
        </Button>
      </Block>
      <Block margin>
        <Button size="large" margin={{ right: 'small' }}>
          Large button
        </Button>
        <Button size="large" primary margin={{ right: 'small' }}>
          Large button
        </Button>
        <Button size="large" secondary margin={{ right: 'small' }}>
          Large button
        </Button>
      </Block>
    </Block>
  ))

  .add('Width modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Button fullWidth margin={{ bottom: 'small' }}>
        Button
      </Button>
      <Button fullWidth primary margin={{ bottom: 'small' }}>
        Button
      </Button>
      <Button fullWidth secondary>
        Button
      </Button>
    </Block>
  ))

  .add('Group', () => (
    <Block margin={{ all: 'large' }}>
      <div>
        <Button.Group>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
        </Button.Group>
      </div>
      <Block margin>
        <Button.Group>
          <Button primary>Button</Button>
          <Button primary>Button</Button>
          <Button primary>Button</Button>
        </Button.Group>
      </Block>
      <Block margin>
        <Button.Group>
          <Button danger>Button</Button>
          <Button danger>Button</Button>
          <Button danger>Button</Button>
        </Button.Group>
      </Block>
    </Block>
  ))

  .add('Button with dropdowns', () => (
    <Block margin={{ all: 'large' }}>
      <Dropdown toggle={<Button>Dropdown</Button>}>
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

  .add('Button group with dropdowns', () => (
    <Block margin={{ all: 'large' }}>
      <Button.Group>
        <Button>Dropdown</Button>
        <Dropdown
          toggle={
            <Button>
              <Icon name="triangle-down" />
            </Button>
          }
          boundaryAlign
          boundary="! .uk-button-group"
          mode="click"
        >
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
      </Button.Group>
    </Block>
  ));
