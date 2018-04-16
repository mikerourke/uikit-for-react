import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Division, Column } from '../src/components';

Column.displayName = 'Column';

const SharedColumn = props => (
  <Column {...props}>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
  </Column>
);

storiesOf('Column', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <SharedColumn width="1/2" />
    </Division>
  ))

  .add('Responsive', () => (
    <Division margin={{ all: 'large' }}>
      <SharedColumn width={{ atSm: '1/2', atMd: '1/3', atLg: '1/4' }} />
    </Division>
  ))

  .add('Divider modifier', () => (
    <Division margin={{ all: 'large' }}>
      <SharedColumn width="1/2" divider />
    </Division>
  ))

  .add('Span all columns', () => (
    <Division margin={{ all: 'large' }}>
      <Column width="1/2" divider>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
        <Column as="blockquote" span cite="#">
          <p>
            All we have to decide is what to do with the time that is given us.
          </p>
          <footer>
            Gandalf in in{' '}
            <cite>
              <a href="">The Fellowship of the Ring</a>
            </cite>
          </footer>
        </Column>
        <p>{faker.lorem.paragraph()}</p>
      </Column>
    </Division>
  ));
