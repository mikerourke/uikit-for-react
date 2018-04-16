import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Division, Image, Panel } from '../src/components';
import { imageLinks } from './common';

storiesOf('Align', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Panel>
        <Image
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
    </Division>
  ))

  .add('Responsive', () => (
    <Division margin={{ all: 'large' }}>
      <Panel>
        <Image
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
    </Division>
  ));
