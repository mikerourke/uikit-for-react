import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Division,
  Button,
  Link,
  Offcanvas,
  Nav,
  Icon,
} from '../src/components';

Offcanvas.displayName = 'Offcanvas';

const SharedOffcanvasBar = () => (
  <Offcanvas.Bar>
    <Offcanvas.Close />
    <h3>Title</h3>
    <p>{faker.lorem.paragraph()}</p>
  </Offcanvas.Bar>
);

storiesOf('Offcanvas', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Offcanvas.Content>
        <Offcanvas.Toggle as={Button} margin={{ right: 'large' }}>
          Open
        </Offcanvas.Toggle>
        <Offcanvas.Toggle as={Link}>Open</Offcanvas.Toggle>
        <Offcanvas>
          <SharedOffcanvasBar />
        </Offcanvas>
      </Offcanvas.Content>
    </Division>
  ))

  .add('Overlay', () => (
    <Division margin={{ all: 'large' }}>
      <Offcanvas.Content>
        <Offcanvas.Toggle as={Button} margin={{ right: 'large' }}>
          Open
        </Offcanvas.Toggle>
        <Offcanvas.Toggle as={Link}>Open</Offcanvas.Toggle>
        <Offcanvas overlay>
          <SharedOffcanvasBar />
        </Offcanvas>
      </Offcanvas.Content>
    </Division>
  ))

  .add('Flip modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Offcanvas.Content>
        <Offcanvas.Toggle as={Button} margin={{ right: 'large' }}>
          Open
        </Offcanvas.Toggle>
        <Offcanvas.Toggle as={Link}>Open</Offcanvas.Toggle>
        <Offcanvas flip overlay>
          <SharedOffcanvasBar />
        </Offcanvas>
      </Offcanvas.Content>
    </Division>
  ))

  .add('Animation modes', () => (
    <Division margin={{ all: 'large' }}>
      <Offcanvas.Content>
        {['Slide', 'Push', 'Reveal', 'None'].map((animationName, idx) => (
          <Offcanvas.Toggle
            key={animationName}
            as={Button}
            margin={{ right: 'small' }}
            toggleIndex={idx}
          >
            {animationName}
          </Offcanvas.Toggle>
        ))}
        {['slide', 'push', 'reveal', 'none'].map((animationName, idx) => (
          <Offcanvas
            key={animationName}
            mode={animationName}
            overlay
            toggleIndex={idx}
          >
            <SharedOffcanvasBar />
          </Offcanvas>
        ))}
      </Offcanvas.Content>
    </Division>
  ))

  .add('Nav in Offcanvas', () => (
    <Division margin={{ all: 'large' }}>
      <Offcanvas.Content>
        {['Primary Nav', 'Default Nav'].map((display, idx) => (
          <Offcanvas.Toggle
            key={display}
            as={Button}
            margin={{ right: 'small' }}
            toggleIndex={idx}
          >
            {display}
          </Offcanvas.Toggle>
        ))}
        {[true, false].map((primary, idx) => (
          <Offcanvas overlay key={`nav-oc-${idx}`} toggleIndex={idx}>
            <Offcanvas.Bar flex={{ direction: 'column', display: true }}>
              <Nav primary={primary} center margin={{ vertical: 'auto' }}>
                <Nav.Item active>Active</Nav.Item>
                <Nav.Item parent title="Parent">
                  <Nav.Subnav>
                    <Nav.Item>Sub item</Nav.Item>
                    <Nav.Item>Sub item</Nav.Item>
                  </Nav.Subnav>
                </Nav.Item>
                <Nav.Header>Header</Nav.Header>
                <Nav.Item>
                  <Icon margin={{ right: 'small' }} name="table" /> Item
                </Nav.Item>
                <Nav.Item>
                  <Icon margin={{ right: 'small' }} name="thumbnails" /> Item
                </Nav.Item>
                <Nav.Divider />
                <Nav.Item>
                  <Icon margin={{ right: 'small' }} name="trash" /> Item
                </Nav.Item>
              </Nav>
            </Offcanvas.Bar>
          </Offcanvas>
        ))}
      </Offcanvas.Content>
    </Division>
  ));
