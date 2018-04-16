import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Division, DescriptionList } from '../src/components';

DescriptionList.displayName = 'DescriptionList';

const sentence = faker.lorem.sentence();
const paragraph = faker.lorem.paragraph();

const SharedDescriptionList = props => (
  <DescriptionList {...props}>
    <DescriptionList.Term>Description term</DescriptionList.Term>
    <DescriptionList.Details>{sentence}</DescriptionList.Details>
    <DescriptionList.Term>Description term</DescriptionList.Term>
    <DescriptionList.Details>{paragraph}</DescriptionList.Details>
    <DescriptionList.Term>Description term</DescriptionList.Term>
    <DescriptionList.Details>{paragraph}</DescriptionList.Details>
  </DescriptionList>
);

storiesOf('Description List', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <SharedDescriptionList />
    </Division>
  ))

  .add('Divider modifier', () => (
    <Division margin={{ all: 'large' }}>
      <SharedDescriptionList divider />
    </Division>
  ));
