import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Slider, Visibility, Panel, Grid } from '../src/components';
import { imageLinks } from './common';

Slider.displayName = 'Slider';

const allImages = [...imageLinks.forSliders, ...imageLinks.forSliders];

const SharedSliderItems = props => (
  <Slider.Items
    childWidth={{ atSm: '1/3', atMd: '1/4', default: '1/2' }}
    {...props}
  >
    {allImages.map((imageName, idx) => (
      <Slider.Item key={idx}>
        <img src={imageName} alt="" />
        <Panel position="center">
          <h1>{idx + 1}</h1>
        </Panel>
      </Slider.Item>
    ))}
  </Slider.Items>
);

storiesOf('Slider', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Visibility.Togglable as={Slider} position="relative" inverse="light">
        <Slider.Container>
          <SharedSliderItems />
        </Slider.Container>
        <Visibility.Toggle
          as={Slider.Previous}
          howerOut="hidden"
          position={{ at: 'center-left', marginSize: 'small' }}
        />
        <Visibility.Toggle
          as={Slider.Next}
          howerOut="hidden"
          position={{ at: 'center-right', marginSize: 'small' }}
        />
      </Visibility.Togglable>
    </Division>
  ))

  .add('Gutter', () => (
    <Division margin={{ all: 'large' }}>
      <Visibility.Togglable as={Slider} position="relative" inverse="light">
        <Slider.Container>
          <SharedSliderItems as={Grid} />
        </Slider.Container>
        <Visibility.Toggle
          as={Slider.Previous}
          howerOut="hidden"
          position={{ at: 'center-left', marginSize: 'small' }}
        />
        <Visibility.Toggle
          as={Slider.Next}
          howerOut="hidden"
          position={{ at: 'center-right', marginSize: 'small' }}
        />
      </Visibility.Togglable>
    </Division>
  ))

  .add('Center', () => (
    <Division margin={{ all: 'large' }}>
      <Visibility.Togglable
        as={Slider}
        position="relative"
        inverse="light"
        center
      >
        <Slider.Items as={Grid}>
          {[
            imageLinks.photo,
            imageLinks.dark,
            imageLinks.light,
            imageLinks.photoTwo,
            imageLinks.photoThree,
          ].map((imageName, idx) => (
            <Slider.Item key={idx} width="3/4">
              <img src={imageName} alt="" />
              <Panel position="center">
                <h1>{idx + 1}</h1>
              </Panel>
            </Slider.Item>
          ))}
        </Slider.Items>
        <Visibility.Toggle
          as={Slider.Previous}
          howerOut="hidden"
          position={{ at: 'center-left', marginSize: 'small' }}
        />
        <Visibility.Toggle
          as={Slider.Next}
          howerOut="hidden"
          position={{ at: 'center-right', marginSize: 'small' }}
        />
      </Visibility.Togglable>
    </Division>
  ));
