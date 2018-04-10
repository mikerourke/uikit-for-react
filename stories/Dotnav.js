import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Cover, Dotnav, Slideshow } from '../src/components';
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
    <Block margin={{ all: 'large' }}>
      <SharedDotnav />
    </Block>
  ))

  .add('Vertical alignment', () => (
    <Block margin={{ all: 'large' }}>
      <SharedDotnav vertical />
    </Block>
  ))

  .add('Position as overlay', () => (
    <Block margin={{ all: 'large' }}>
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
        <Block
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
        </Block>
      </Slideshow>
    </Block>
  ));
