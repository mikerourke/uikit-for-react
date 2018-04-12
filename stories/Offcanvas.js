import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Button, Link, Offcanvas } from '../src/components';

Offcanvas.displayName = 'Offcanvas';

const SharedOffcanvas = () => (
  <Offcanvas.Bar>
    <Offcanvas.Close />
    <h3>Title</h3>
    <p>{faker.lorem.paragraph()}</p>
  </Offcanvas.Bar>
);

storiesOf('Offcanvas', module).add('Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Offcanvas.Content>
      <Offcanvas.Toggle as={Button} margin={{ right: 'large' }} target="abc">
        Open
      </Offcanvas.Toggle>
      <Offcanvas.Toggle as={Link} target="abc">
        Open
      </Offcanvas.Toggle>
      <Offcanvas>
        <SharedOffcanvas toggle="abc" />
      </Offcanvas>
    </Offcanvas.Content>
  </Block>
));

// .add('Overlay', () => (
//   <Block margin={{ all: 'large' }}>
//     <Offcanvas.Content>
//       <Offcanvas.Toggle as={Button} margin={{ right: 'large' }} target="abc">
//         Open
//       </Offcanvas.Toggle>
//       <Offcanvas.Toggle as={Link} target="abc">
//         Open
//       </Offcanvas.Toggle>
//       <SharedOffcanvas overlay toggle="abc" />
//     </Offcanvas.Content>
//   </Block>
// ))
//
// .add('Flip modifier', () => (
//   <Block margin={{ all: 'large' }}>
//     <Offcanvas.Content>
//       <Offcanvas.Toggle as={Button} margin={{ right: 'large' }} target="abc">
//         Open
//       </Offcanvas.Toggle>
//       <Offcanvas.Toggle as={Link} target="abc">
//         Open
//       </Offcanvas.Toggle>
//       <SharedOffcanvas flip overlay />
//     </Offcanvas.Content>
//   </Block>
// ));
