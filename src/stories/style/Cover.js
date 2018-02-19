import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Cover, Video } from '../../components';

Cover.displayName = 'Cover';

const mediaLink = 'https://getuikit.com/docs/images/dark.jpg';

storiesOf('Cover', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Cover.Container utility={{ height: 'medium' }}>
        <Cover src={mediaLink} />
      </Cover.Container>
    </Block>
  ))

  .add('Video', () => (
    <Block margin={{ all: 'large' }}>
      <Cover.Container utility={{ height: 'medium' }}>
        <Cover as={Video} autoplay loop muted playsInline>
          <Video.Source
            src="//www.quirksmode.org/html5/videos/big_buck_bunny.mp4"
            type="video/mp4"
          />
          <Video.Source
            src="//www.quirksmode.org/html5/videos/big_buck_bunny.ogv"
            type="video/ogg"
          />
        </Cover>
      </Cover.Container>
    </Block>
  ))

  .add('Iframe', () => (
    <Block margin={{ all: 'large' }}>
      <Cover.Container utility={{ height: 'medium' }}>
        <Cover
          as="iframe"
          src="//www.youtube.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent"
          width={560}
          height={315}
          frameBorder={0}
          allowFullScreen
        />
      </Cover.Container>
    </Block>
  ))

  .add('Responsive height', () => (
    <Block margin={{ all: 'large' }}>
      <Cover.Container aspectRatio={{ height: 200, width: 400 }}>
        <Cover src={mediaLink} />
      </Cover.Container>
    </Block>
  ))

  .add('Viewport height', () => (
    <Block margin={{ all: 'large' }}>
      <Cover.Container viewport>
        <Cover src={mediaLink} />
      </Cover.Container>
    </Block>
  ));
