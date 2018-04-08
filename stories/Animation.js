import React from 'react';
import { storiesOf } from '@storybook/react';
import startCase from 'lodash/startCase';
import { Animation, Block, Card, Grid, Image } from '../src/components';
import { UIK } from '../src/lib';
import { imageLinks } from './common';

const validAnimations = UIK.ANIMATIONS.filter(
  animationName => !/kenburns/g.test(animationName),
);

const animationDisplayNames = validAnimations.map(animationName => {
  const updatedName = animationName.replace('slide-', '');
  return startCase(updatedName);
});

storiesOf('Animation', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ default: '1/2', atSm: '1/4' }} matchHeight>
        {validAnimations.map((animationName, idx) => (
          <Grid.Cell toggleFor="animation" key={animationName}>
            <Animation as={Card} name={animationName}>
              <Card.Content textAlign="center">
                {animationDisplayNames[idx]}
              </Card.Content>
            </Animation>
          </Grid.Cell>
        ))}
      </Grid>
    </Block>
  ))

  .add('Reverse modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ default: '1/2', atSm: '1/4' }} matchHeight>
        {validAnimations.map((animationName, idx) => (
          <Grid.Cell toggleFor="animation" key={animationName}>
            <Animation as={Card} name={animationName} reverse>
              <Card.Content textAlign="center">
                {animationDisplayNames[idx]}
              </Card.Content>
            </Animation>
          </Grid.Cell>
        ))}
      </Grid>
    </Block>
  ))

  .add('Fast modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Block width={{ atSm: '1/3' }} toggleFor="animation">
        <Animation as={Card} name="fade" fast>
          <Card.Content as="p" textAlign="center">
            Fade
          </Card.Content>
        </Animation>
      </Block>
    </Block>
  ))

  .add('Origin modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/3' }} matchHeight>
        <Grid.Cell toggleFor="animation">
          <Animation as={Card} name="scale-up" transformOrigin="bottom-right">
            <Card.Content textAlign="center">Bottom Right</Card.Content>
          </Animation>
        </Grid.Cell>
        <Grid.Cell toggleFor="animation">
          <Animation as={Card} name="scale-up" transformOrigin="top-center">
            <Card.Content textAlign="center">Top Center</Card.Content>
          </Animation>
        </Grid.Cell>
        <Grid.Cell toggleFor="animation">
          <Animation as={Card} name="scale-up" transformOrigin="bottom-center">
            <Card.Content textAlign="center">Bottom Center</Card.Content>
          </Animation>
        </Grid.Cell>
      </Grid>
    </Block>
  ))

  .add('Ken Burns', () => (
    <Block margin={{ all: 'large' }}>
      <Grid gutter="large" childWidth={{ atSm: '1/2' }}>
        <Grid.Cell overflow="hidden">
          <Animation
            as={Image}
            src={imageLinks.dark}
            alt="Example image"
            name="kenburns"
          />
        </Grid.Cell>
        <Grid.Cell overflow="hidden">
          <Animation
            src={imageLinks.dark}
            alt="Example image"
            as={Image}
            name="kenburns"
            reverse
          />
        </Grid.Cell>
      </Grid>
    </Block>
  ));
