import React from 'react';
import startCase from 'lodash/startCase';
import { storiesOf } from '@storybook/react';
import {
  Division,
  Grid,
  Slideshow,
  Cover,
  Heading,
  Visibility,
} from '../src/components';
import { imageLinks } from './common';

Slideshow.displayName = 'Slideshow';

storiesOf('Slideshow', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Visibility.Togglable as={Slideshow} position="relative" inverse="light">
        <Slideshow.Items>
          <Slideshow.Item>
            <Cover src={imageLinks.photo} />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src={imageLinks.dark} />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src={imageLinks.light} />
          </Slideshow.Item>
        </Slideshow.Items>
        <Visibility.Toggle
          as={Slideshow.Previous}
          howerOut="hidden"
          large
          position={{ at: 'center-left', marginSize: 'small' }}
        />
        <Visibility.Toggle
          as={Slideshow.Next}
          howerOut="hidden"
          large
          position={{ at: 'center-right', marginSize: 'small' }}
        />
      </Visibility.Togglable>
    </Division>
  ))

  .add('Animations', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/2' }}>
        {['slide', 'fade', 'scale', 'pull', 'push'].map(animationName => (
          <Grid.Cell key={animationName}>
            <Heading as="div" size="h3">
              {startCase(animationName)}
            </Heading>
            <Visibility.Togglable
              as={Slideshow}
              position="relative"
              inverse="light"
              transition={animationName}
            >
              <Slideshow.Items>
                <Slideshow.Item>
                  <Cover src={imageLinks.photo} />
                </Slideshow.Item>
                <Slideshow.Item>
                  <Cover src={imageLinks.dark} />
                </Slideshow.Item>
                <Slideshow.Item>
                  <Cover src={imageLinks.light} />
                </Slideshow.Item>
              </Slideshow.Items>
              <Visibility.Toggle
                as={Slideshow.Previous}
                howerOut="hidden"
                large
                position={{ at: 'center-left', marginSize: 'small' }}
              />
              <Visibility.Toggle
                as={Slideshow.Next}
                howerOut="hidden"
                large
                position={{ at: 'center-right', marginSize: 'small' }}
              />
            </Visibility.Togglable>
          </Grid.Cell>
        ))}
      </Grid>
    </Division>
  ))

  .add('Ratio', () => (
    <Division margin={{ all: 'large' }}>
      <Visibility.Togglable
        as={Slideshow}
        position="relative"
        inverse="light"
        ratio="7:3"
        transition="push"
      >
        <Slideshow.Items>
          <Slideshow.Item>
            <Cover src={imageLinks.photo} />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src={imageLinks.dark} />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src={imageLinks.light} />
          </Slideshow.Item>
        </Slideshow.Items>
        <Visibility.Toggle
          as={Slideshow.Previous}
          howerOut="hidden"
          large
          position={{ at: 'center-left', marginSize: 'small' }}
        />
        <Visibility.Toggle
          as={Slideshow.Next}
          howerOut="hidden"
          large
          position={{ at: 'center-right', marginSize: 'small' }}
        />
      </Visibility.Togglable>
    </Division>
  ));
