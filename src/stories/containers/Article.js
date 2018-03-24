import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Article, Button, Base, Grid } from '../../components';

Article.displayName = 'Article';

const leadText = faker.lorem.paragraph();
const bodyText = faker.lorem.paragraphs(2);

storiesOf('Article', module).add('Basic Usage', () => (
  <Base margin={{ all: 'large' }}>
    <Article>
      <Article.Title>Heading</Article.Title>
      <Article.Meta>Written by Super User on March 1st, 2017</Article.Meta>
      <Article.Lead>{leadText}</Article.Lead>
      <Article.Body as="p">{bodyText}</Article.Body>
      <Grid gutter="small" childWidth="auto">
        <Grid.Cell>
          <Button as="a" asText>
            Read more
          </Button>
        </Grid.Cell>
        <Grid.Cell>
          <Button as="a" asText>
            5 Comments
          </Button>
        </Grid.Cell>
      </Grid>
    </Article>
  </Base>
));
