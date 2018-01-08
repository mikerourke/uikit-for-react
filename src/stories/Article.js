import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Article from '../components/Article';
import Container from '../components/Container';

Article.displayName = 'Article';

const leadText = faker.lorem.paragraph();
const bodyText = faker.lorem.paragraphs(2);

storiesOf('Article', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Article>
        <Article.Title>Heading</Article.Title>
        <Article.Meta>Written by Super User on March 1st, 2017</Article.Meta>
        <Article.Lead>{leadText}</Article.Lead>
        <Article.Body>{bodyText}</Article.Body>
      </Article>
    </Container>
  ));
