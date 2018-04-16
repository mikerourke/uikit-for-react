import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Grid, Marker } from '../src/components';
import { imageLinks } from './common';

Marker.displayName = 'Marker';

storiesOf('Marker', module).add('Usage', () => (
  <Division margin={{ all: 'small' }}>
    <Grid childWidth="1/2">
      <Grid.Cell>
        <Division inline inverse="dark">
          <img src={imageLinks.light} alt="" />
          <Marker
            position="absolute"
            transformCenter
            style={{ left: '20%', top: '30%' }}
            href="#"
          />
          <Marker
            position="absolute"
            transformCenter
            style={{ left: '60%', top: '40%' }}
            href="#"
          />
          <Marker
            position="absolute"
            transformCenter
            style={{ left: '80%', top: '70%' }}
            href="#"
          />
        </Division>
      </Grid.Cell>
      <Grid.Cell>
        <Division inline inverse="light">
          <img src={imageLinks.dark} alt="" />
          <Marker
            position="absolute"
            transformCenter
            style={{ left: '20%', top: '30%' }}
            href="#"
          />
          <Marker
            position="absolute"
            transformCenter
            style={{ left: '60%', top: '40%' }}
            href="#"
          />
          <Marker
            position="absolute"
            transformCenter
            style={{ left: '80%', top: '70%' }}
            href="#"
          />
        </Division>
      </Grid.Cell>
    </Grid>
  </Division>
));
