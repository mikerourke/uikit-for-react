import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Button, Link, Offcanvas } from '../../src/components';

Offcanvas.displayName = 'Offcanvas';

storiesOf('Offcanvas', module).add('Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Offcanvas.Content>
      <Offcanvas.Toggle as={Button} margin={{ right: 'large' }}>
        Open
      </Offcanvas.Toggle>
      <Offcanvas.Toggle as={Link}>Open</Offcanvas.Toggle>
      <Offcanvas>
        <Offcanvas.Bar>
          <Offcanvas.Close />
          <h3>Title</h3>
          <p>{faker.lorem.paragraph()}</p>
        </Offcanvas.Bar>
      </Offcanvas>
    </Offcanvas.Content>
  </Block>
));
