import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Division, Button, Grid } from '../src/components';

storiesOf('Inverse', module).add('Usage', () => (
  <Division margin={{ all: 'large' }}>
    <Grid childWidth={{ atSm: '1/2' }}>
      <Grid.Cell>
        <Division inverse="light" background="secondary" padding>
          <h3>Light</h3>
          <p>{faker.lorem.paragraph()}</p>
          <Button>Button</Button>
        </Division>
        <Division inverse="dark" background="muted" padding>
          <h3>Dark</h3>
          <p>{faker.lorem.paragraph()}</p>
          <Button>Button</Button>
        </Division>
      </Grid.Cell>
    </Grid>
  </Division>
));
