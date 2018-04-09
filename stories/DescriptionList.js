import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, DescriptionList } from '../src/components';

DescriptionList.displayName = 'DescriptionList';

const sentence = faker.lorem.sentence();
const paragraph = faker.lorem.paragraph();

storiesOf('Description List', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <DescriptionList>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{sentence}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
      </DescriptionList>
    </Block>
  ))

  .add('Divider modifier', () => (
    <Block margin={{ all: 'large' }}>
      <DescriptionList divider>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{sentence}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
      </DescriptionList>
    </Block>
  ));
