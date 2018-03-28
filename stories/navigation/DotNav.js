import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base, Cover, DotNav, Slideshow } from '../../src/components';
import { imageLinks } from '../common';

DotNav.displayName = 'DotNav';

storiesOf('DotNav', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <DotNav>
        <DotNav.Item active>Item 1</DotNav.Item>
        <DotNav.Item>Item 2</DotNav.Item>
        <DotNav.Item>Item 3</DotNav.Item>
        <DotNav.Item>Item 4</DotNav.Item>
        <DotNav.Item>Item 5</DotNav.Item>
      </DotNav>
    </Base>
  ))

  .add('Vertical alignment', () => (
    <Base margin={{ all: 'large' }}>
      <DotNav vertical>
        <DotNav.Item active>Item 1</DotNav.Item>
        <DotNav.Item>Item 2</DotNav.Item>
        <DotNav.Item>Item 3</DotNav.Item>
        <DotNav.Item>Item 4</DotNav.Item>
        <DotNav.Item>Item 5</DotNav.Item>
      </DotNav>
    </Base>
  ))

  .add('Position as overlay', () => (
    <Base margin={{ all: 'large' }}>
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
        <Base
          position={{
            at: 'bottom-center',
            marginSize: 'small',
          }}
        >
          <DotNav>
            <DotNav.Item itemIn={{ parent: 'slideshow', index: 0 }}>
              Item 1
            </DotNav.Item>
            <DotNav.Item itemIn={{ parent: 'slideshow', index: 1 }}>
              Item 2
            </DotNav.Item>
            <DotNav.Item itemIn={{ parent: 'slideshow', index: 2 }}>
              Item 3
            </DotNav.Item>
          </DotNav>
        </Base>
      </Slideshow>
    </Base>
  ));
