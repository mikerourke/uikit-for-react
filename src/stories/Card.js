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
      <Card width={{ atM: '1/2' }}>
        <Card.Title>Default</Card.Title>
        <p>{cardContent}</p>
      </Card>
    </Container>
  ))

  .add('Style modifiers', () => (
    <Grid>
      <Card width={{ atM: '1/2' }}>
        <Card.Title>Default</Card.Title>
        <p>{cardContent}</p>
      </Card>
    </Grid>
  ));
