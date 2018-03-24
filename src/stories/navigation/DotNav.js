import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base, Cover, DotNav, Slideshow } from '../../components';

DotNav.displayName = 'DotNav';

storiesOf('DotNav', module)
  .add('Basic Usage', () => (
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
            <Cover src="https://getuikit.com/docs/images/photo.jpg" alt="" />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src="https://getuikit.com/docs/images/dark.jpg" alt="" />
          </Slideshow.Item>
          <Slideshow.Item>
            <Cover src="https://getuikit.com/docs/images/size1.jpg" alt="" />
          </Slideshow.Item>
        </Slideshow.Items>
        <Base
          position={{
            vertical: 'bottom',
            horizontal: 'center',
            marginSize: 'small',
          }}
        >
          <DotNav>
            <DotNav.Item slideshowItem={0}>Item 1</DotNav.Item>
            <DotNav.Item slideshowItem={1}>Item 2</DotNav.Item>
            <DotNav.Item slideshowItem={2}>Item 3</DotNav.Item>
          </DotNav>
        </Base>
      </Slideshow>
    </Base>
  ));
