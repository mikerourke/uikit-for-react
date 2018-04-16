import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Cover, Dotnav, Slideshow } from '../src/components';
import { imageLinks } from './common';

Dotnav.displayName = 'Dotnav';

const SharedDotnav = props => (
  <Dotnav {...props}>
    <Dotnav.Item active>Item 1</Dotnav.Item>
    <Dotnav.Item>Item 2</Dotnav.Item>
    <Dotnav.Item>Item 3</Dotnav.Item>
    <Dotnav.Item>Item 4</Dotnav.Item>
    <Dotnav.Item>Item 5</Dotnav.Item>
  </Dotnav>
);

storiesOf('Dotnav', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <SharedDotnav />
    </Division>
  ))

  .add('Vertical alignment', () => (
    <Division margin={{ all: 'large' }}>
      <SharedDotnav vertical />
    </Division>
  ))

  .add('Position as overlay', () => (
    <Division margin={{ all: 'large' }}>
      <Slideshow position="relative" inverse="light">
        <Slideshow.Items>
          <Slideshow.Item>
            <Cover src={imageLinks.photo} alt="" />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src={imageLinks.dark} alt="" />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src={imageLinks.sizeOne} alt="" />
          </Slideshow.Item>
        </Slideshow.Items>
        <Division
          position={{
            at: 'bottom-center',
            marginSize: 'small',
          }}
        >
          <Dotnav>
            <Dotnav.Item itemIn={{ parent: 'slideshow', index: 0 }}>
              Item 1
            </Dotnav.Item>
            <Dotnav.Item itemIn={{ parent: 'slideshow', index: 1 }}>
              Item 2
            </Dotnav.Item>
            <Dotnav.Item itemIn={{ parent: 'slideshow', index: 2 }}>
              Item 3
            </Dotnav.Item>
          </Dotnav>
        </Division>
      </Slideshow>
    </Division>
  ));
