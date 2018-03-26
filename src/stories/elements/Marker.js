import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Base, Grid, Marker } from '../../components';
import { imageLinks } from '../common';

Marker.displayName = 'Marker';

storiesOf('Marker', module).add('Usage', () => (
  <Base margin={{ all: 'small' }}>
    <Grid childWidth="1/2">
      <Grid.Cell>
        <Base inline inverse="dark">
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
        </Base>
      </Grid.Cell>
      <Grid.Cell>
        <Base inline inverse="light">
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
        </Base>
      </Grid.Cell>
    </Grid>
  </Base>
));
