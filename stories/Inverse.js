import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Button, Grid } from '../src/components';

storiesOf('Inverse', module).add('Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Grid childWidth={{ atSm: '1/2' }}>
      <Grid.Cell>
        <Block inverse="light" background="secondary" padding>
          <h3>Light</h3>
          <p>{faker.lorem.paragraph()}</p>
          <Button>Button</Button>
        </Block>
        <Block inverse="dark" background="muted" padding>
          <h3>Dark</h3>
          <p>{faker.lorem.paragraph()}</p>
          <Button>Button</Button>
        </Block>
      </Grid.Cell>
    </Grid>
  </Block>
));
