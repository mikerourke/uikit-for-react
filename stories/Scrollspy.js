// TODO: Finish this.
import React from 'react';
import faker from 'faker';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import { Division, Scrollspy, Grid, Card } from '../src/components';

Scrollspy.displayName = 'Scrollspy';

const sentence = faker.lorem.sentence();

storiesOf('Scrollspy', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Grid
        childWidth={{ atMd: '1/2' }}
        matchHeight
        style={{ paddingTop: 800 }}
      >
        <Grid.Cell>
          <Scrollspy as={Card} inviewAnimation="slide-left" repeat>
            <Card.Title>Left</Card.Title>
            <p>{faker.lorem.paragraph()}</p>
          </Scrollspy>
        </Grid.Cell>
        <Grid.Cell>
          <Scrollspy as={Card} inviewAnimation="slide-right" repeat>
            <Card.Title>Right</Card.Title>
            <p>{faker.lorem.paragraph()}</p>
          </Scrollspy>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Groups', () => (
    <Division margin={{ all: 'large' }} style={{ paddingTop: 800 }}>
      <Grid
        as={Scrollspy}
        group
        childWidth={{ atMd: '1/3' }}
        delay={500}
        repeat
        inviewAnimation="fade"
      >
        {range(0, 6).map(idx => (
          <Grid.Cell key={idx} as={Scrollspy.Item}>
            <Card>
              <Card.Title>Fade</Card.Title>
              <p>{sentence}</p>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </Division>
  ));
