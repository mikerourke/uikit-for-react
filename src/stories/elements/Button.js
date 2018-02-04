import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Block,
  Button,
  Container,
  Dropdown,
  Grid,
  Icon,
  Nav,
} from '../../components';

Button.displayName = 'Button';

storiesOf('Button', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Button as="a" margin={{ right: 'small' }}>
        Link
      </Button>
      <Button margin={{ right: 'small' }}>Button</Button>
      <Button disabled>Disabled</Button>
    </Container>
  ))

  .add('Style modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Grid gutter="small" childWidth={{ atSm: 'expand' }} textAlign="center">
        <Grid.Cell>
          <Button>Default</Button>
        </Grid.Cell>
        <Grid.Cell>
          <Button primary>Primary</Button>
        </Grid.Cell>
        <Grid.Cell>
          <Button secondary>Secondary</Button>
        </Grid.Cell>
        <Grid.Cell>
          <Button danger>Danger</Button>
        </Grid.Cell>
        <Grid.Cell>
          <Button text>Text</Button>
        </Grid.Cell>
        <Grid.Cell>
          <Button link>Link</Button>
        </Grid.Cell>
      </Grid>
    </Container>
  ))

  .add('Size modifiers', () => (
    <Container margin={{ all: 'large' }}>
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
      <Container margin>
        <Button size="large" margin={{ right: 'small' }}>
          Large button
        </Button>
        <Button size="large" primary margin={{ right: 'small' }}>
          Large button
        </Button>
        <Button size="large" secondary margin={{ right: 'small' }}>
          Large button
        </Button>
      </Container>
    </Container>
  ))

  .add('Width modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Button fullWidth margin={{ bottom: 'small' }}>
        Button
      </Button>
      <Button fullWidth primary margin={{ bottom: 'small' }}>
        Button
      </Button>
      <Button fullWidth secondary>
        Button
      </Button>
    </Container>
  ))

  .add('Group', () => (
    <Container margin={{ all: 'large' }}>
      <Container>
        <Button.Group>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
        </Button.Group>
      </Container>
      <Container margin>
        <Button.Group>
          <Button primary>Button</Button>
          <Button primary>Button</Button>
          <Button primary>Button</Button>
        </Button.Group>
      </Container>
      <Container margin>
        <Button.Group>
          <Button danger>Button</Button>
          <Button danger>Button</Button>
          <Button danger>Button</Button>
        </Button.Group>
      </Container>
    </Container>
  ))

  .add('Button with dropdowns', () => (
    <Container margin={{ all: 'large' }}>
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
    </Container>
  ))

  .add('Button group with dropdowns', () => (
    <Container margin={{ all: 'large' }}>
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
    </Container>
  ));
