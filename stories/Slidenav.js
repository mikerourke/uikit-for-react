import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Cover,
  Division,
  Slidenav,
  Slideshow,
  Visibility,
} from '../src/components';
import { imageLinks } from './common';

Slidenav.displayName = 'Slidenav';

storiesOf('Slidenav', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Slidenav.Previous />
      <Slidenav.Next />
    </Division>
  ))

  .add('Large modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Slidenav.Previous large />
      <Slidenav.Next large />
    </Division>
  ))

  .add('Slidenav container', () => (
    <Division margin={{ all: 'large' }}>
      <Slidenav.Container>
        <Slidenav.Previous />
        <Slidenav.Next />
      </Slidenav.Container>
    </Division>
  ))

  .add('Position as overlay', () => (
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
          as={Slidenav.Previous}
          howerOut="hidden"
          large
          position={{ at: 'center-left', marginSize: 'small' }}
        />
        <Visibility.Toggle
          as={Slidenav.Next}
          howerOut="hidden"
          large
          position={{ at: 'center-right', marginSize: 'small' }}
        />
      </Visibility.Togglable>
    </Division>
  ));
