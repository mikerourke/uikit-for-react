import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Overlay, Grid } from '../src/components';
import { imageLinks } from './common';

Overlay.displayName = 'Overlay';

const sentence =
  'Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

storiesOf('Overlay', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Overlay.Context>
        <Overlay.Image src={imageLinks.photo} />
        <Overlay inverse="light" position="bottom">
          <p>{sentence}</p>
        </Overlay>
      </Overlay.Context>
    </Division>
  ))

  .add('Style modifiers: Default', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/2' }}>
        <Grid.Cell>
          <Overlay.Context>
            <Overlay.Image src={imageLinks.photo} />
            <Overlay simple position="bottom">
              <p>{sentence}</p>
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
        <Grid.Cell>
          <Overlay.Context>
            <Overlay.Image src={imageLinks.photo} />
            <Overlay simple position="cover" />
            <Overlay position="bottom" inverse="dark">
              <p>{sentence}</p>
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Style modifiers: Primary', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/2' }}>
        <Grid.Cell>
          <Overlay.Context>
            <Overlay.Image src={imageLinks.photo} />
            <Overlay primary position="bottom">
              <p>{sentence}</p>
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
        <Grid.Cell>
          <Overlay.Context>
            <Overlay.Image src={imageLinks.photo} />
            <Overlay primary position="cover" />
            <Overlay position="bottom" inverse="dark">
              <p>{sentence}</p>
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Overlay icon', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/2' }}>
        <Grid.Cell>
          <Overlay.Context inverse="light">
            <Overlay.Image src={imageLinks.dark} />
            <Overlay position="center">
              <Overlay.Icon />
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
        <Grid.Cell>
          <Overlay.Context inverse="dark">
            <Overlay.Image src={imageLinks.photo} />
            <Overlay simple position="cover">
              <Overlay position="center">
                <Overlay.Icon />
              </Overlay>
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Position', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/2' }}>
        <Grid.Cell>
          <Overlay.Context>
            <Overlay.Image src={imageLinks.photo} />
            <Overlay simple position="top">
              <p>Top</p>
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
        <Grid.Cell>
          <Overlay.Context inverse="dark">
            <Overlay.Image src={imageLinks.photo} />
            <Overlay simple position="center">
              <p>Center</p>
            </Overlay>
          </Overlay.Context>
        </Grid.Cell>
      </Grid>
    </Division>
  ));
