import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Button, Link, Offcanvas } from '../src/components';

Offcanvas.displayName = 'Offcanvas';

const SharedOffcanvas = props => (
  <Offcanvas {...props}>
    <Offcanvas.Bar>
      <Offcanvas.Close />
      <h3>Title</h3>
      <p>{faker.lorem.paragraph()}</p>
    </Offcanvas.Bar>
  </Offcanvas>
);

storiesOf('Offcanvas', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Offcanvas.Content>
        <Offcanvas.Toggle as={Button} margin={{ right: 'large' }} target="abc">
          Open
        </Offcanvas.Toggle>
        <Offcanvas.Toggle as={Link} target="abc">
          Open
        </Offcanvas.Toggle>
        <SharedOffcanvas toggle="abc" />
      </Offcanvas.Content>
    </Block>
  ))

  .add('Overlay', () => (
    <Block margin={{ all: 'large' }}>
      <Offcanvas.Content>
        <Offcanvas.Toggle as={Button} margin={{ right: 'large' }} target="abc">
          Open
        </Offcanvas.Toggle>
        <Offcanvas.Toggle as={Link} target="abc">
          Open
        </Offcanvas.Toggle>
        <SharedOffcanvas overlay toggle="abc" />
      </Offcanvas.Content>
    </Block>
  ))

  .add('Flip modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Offcanvas.Content>
        <Offcanvas.Toggle as={Button} margin={{ right: 'large' }} target="abc">
          Open
        </Offcanvas.Toggle>
        <Offcanvas.Toggle as={Link} target="abc">
          Open
        </Offcanvas.Toggle>
        <SharedOffcanvas flip overlay />
      </Offcanvas.Content>
    </Block>
  ));
