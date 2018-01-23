import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Card from '../components/Card';
import Container from '../components/Container';
import Grid from '../components/Grid';

Card.displayName = 'Card';

const cardContent = faker.lorem.paragraph();

storiesOf('Card', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Card width={{ atMd: '1/2' }}>
        <Card.Title>Default</Card.Title>
        <Card.Content>{cardContent}</Card.Content>
      </Card>
    </Container>
  ))

  .add('Style modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <Grid>
        <Card width={{ atMd: '1/2' }}>
          <Card.Title>Default</Card.Title>
          <Card.Content>{cardContent}</Card.Content>
        </Card>
      </Grid>
    </Container>
  ));
