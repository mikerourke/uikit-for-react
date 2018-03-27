import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Container, Panel, Base } from '../../components';
import { imageLinks } from '../common';

storiesOf('Align', module)
  .add('Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Panel>
        <Base
          as="img"
          alignTo="left"
          margin={{ adjacent: 'remove' }}
          src={imageLinks.light}
          width={225}
          height={150}
          alt="Example Image"
        />
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
      </Panel>
    </Container>
  ))

  .add('Responsive', () => (
    <Container margin={{ all: 'large' }}>
      <Panel>
        <Base
          as="img"
          alignTo={{
            default: 'center',
            atMd: 'right',
          }}
          margin={{ adjacent: 'remove' }}
          src={imageLinks.light}
          width={225}
          height={150}
          alt="Example Image"
        />
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
      </Panel>
    </Container>
  ));
