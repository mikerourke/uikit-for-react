import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Base, Grid, Marker } from '../../components';

const darkImage = 'https://getuikit.com/docs/images/dark.jpg';
const lightImage = 'https://getuikit.com/docs/images/light.jpg';

Marker.displayName = 'Marker';

storiesOf('Marker', module).add('Basic Usage', () => (
  <Base margin={{ all: 'small' }}>
    <Grid childWidth="1/2">
      <Grid.Cell>
        <Base inline inverse="dark">
          <img src={lightImage} alt="" />
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
          <img src={darkImage} alt="" />
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
