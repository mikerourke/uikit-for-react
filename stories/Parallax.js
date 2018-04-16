import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { Division, Flex, Base, Grid, Card } from '../src/components';
import { imageLinks } from './common';

storiesOf('Parallax', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }} style={{ paddingTop: 400 }}>
      <Flex
        inverse="light"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.dark }}
        parallax={{ bgy: -200 }}
      >
        <Base
          as="h1"
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
        >
          Headline
        </Base>
      </Flex>
    </Division>
  ))

  .add('Start and end values', () => (
    <Division margin={{ all: 'large' }} style={{ paddingTop: 400 }}>
      <Flex
        alignItems="top"
        inverse="light"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.dark }}
        overflow="hidden"
      >
        <Base
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
        >
          <Base
            as="h1"
            parallax={{
              opacity: '0,1',
              y: '-100,0',
              scale: '2,1',
              viewport: 0.5,
            }}
          >
            Headline
          </Base>
          <Base
            as="p"
            parallax={{
              opacity: '0,1',
              y: '100,0',
              scale: '0.5,1',
              viewport: 0.5,
            }}
          >
            {faker.lorem.paragraph()}
          </Base>
        </Base>
      </Flex>
    </Division>
  ))

  .add('Multiple steps', () => (
    <Division margin={{ all: 'large' }} style={{ paddingTop: 400 }}>
      <Flex
        alignItems="top"
        inverse="light"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.dark }}
        overflow="hidden"
      >
        <Base
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
        >
          <Base
            as="h1"
            parallax={{
              opacity: '0,1,1',
              y: '-100,0,0',
              scale: '2,1,1',
              viewport: 0.5,
            }}
          >
            Headline
          </Base>
          <Base
            as="p"
            parallax={{
              opacity: '0,1,1',
              y: '100,0,0',
              scale: '0.5,1,1',
              viewport: 0.5,
            }}
          >
            {faker.lorem.paragraph()}
          </Base>
        </Base>
      </Flex>
    </Division>
  ))

  .add('Viewport position', () => (
    <Division margin={{ all: 'large' }} style={{ paddingTop: 800 }}>
      <Flex
        alignItems="top"
        inverse="light"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.dark }}
        overflow="hidden"
      >
        <Base
          as="h1"
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
          parallax={{ opacity: '0,1', y: '100,0', viewport: 0.5 }}
        >
          Headline
        </Base>
      </Flex>
    </Division>
  ))

  .add('Nesting', () => (
    <Division margin={{ all: 'large' }} style={{ paddingTop: 800 }}>
      <Flex
        alignItems="top"
        inverse="light"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.dark }}
        parallax={{ bgy: -200 }}
      >
        <Base
          as="h1"
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
          parallax={{ y: '100,0' }}
        >
          Headline
        </Base>
      </Flex>
    </Division>
  ))

  .add('Target', () => (
    <Division
      margin={{ all: 'large' }}
      style={{ paddingTop: 800, paddingBottom: 800 }}
    >
      <Flex
        alignItems="top"
        inverse="light"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.dark }}
        parallax={{ bgy: -200 }}
        forTarget="test-target"
      >
        <Base
          as="h1"
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
          parallax={{ y: '100,0', target: 'test-target' }}
        >
          Headline
        </Base>
      </Flex>
    </Division>
  ))

  .add('Easing', () => (
    <Division
      margin={{ all: 'large' }}
      style={{ paddingTop: 800, paddingBottom: 800 }}
    >
      <Flex
        alignItems="top"
        inverse="light"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.dark }}
        overflow="hidden"
        forTarget="test-easing"
      >
        <Grid margin={{ auto: true, vertical: 'auto' }} inline>
          {[0, 0.5, 0.6, 0.8, 1, 2, 4].map(easing => (
            <Grid.Cell key={easing.toString()}>
              <Card
                padding="small"
                parallax={{ target: 'test-easing', y: 200, easing }}
              >
                {easing}
              </Card>
            </Grid.Cell>
          ))}
        </Grid>
      </Flex>
    </Division>
  ))

  .add('Colors', () => (
    <Division
      margin={{ all: 'large' }}
      style={{ paddingTop: 800, paddingBottom: 800 }}
    >
      <Flex
        alignItems="top"
        height="large"
        parallax={{
          backgroundColor: 'yellow,white',
          borderColor: '#00f,#f00',
          viewport: 0.5,
        }}
        style={{ border: '10px solid #000' }}
        forTarget="test-color"
        overflow="hidden"
      >
        <Base
          as="h1"
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
          parallax={{ color: '#0f0', target: 'test-color', viewport: 0.5 }}
        >
          Headline
        </Base>
      </Flex>
    </Division>
  ))

  .add('Filters', () => (
    <Division
      margin={{ all: 'large' }}
      style={{ paddingTop: 800, paddingBottom: 800 }}
    >
      <Flex
        alignItems="top"
        height="large"
        background={{ cover: true, imageUrl: imageLinks.light }}
        parallax={{ sepia: 100 }}
        forTarget="test-filter"
        overflow="hidden"
      >
        <Base
          as="h1"
          width={{ atMd: '1/2' }}
          textAlign="center"
          margin={{ auto: true, vertical: 'auto' }}
          parallax={{ target: 'test-filter', blur: '0,10' }}
        >
          Headline
        </Base>
      </Flex>
    </Division>
  ));
