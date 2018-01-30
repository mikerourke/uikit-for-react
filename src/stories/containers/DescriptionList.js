import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Container, DescriptionList } from '../../components';

DescriptionList.displayName = 'DescriptionList';

const sentence = faker.lorem.sentence();
const paragraph = faker.lorem.paragraph();

storiesOf('DescriptionList', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <DescriptionList>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{sentence}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
      </DescriptionList>
    </Container>
  ))

  .add('Divider modifier', () => (
    <Container margin={{ all: 'large' }}>
      <DescriptionList divider>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{sentence}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
        <DescriptionList.Term>Description term</DescriptionList.Term>
        <DescriptionList.Details>{paragraph}</DescriptionList.Details>
      </DescriptionList>
    </Container>
  ));
