import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base, Cover, Video } from '../../src/components';
import { imageLinks, videoSources } from '../common';

Cover.displayName = 'Cover';

storiesOf('Cover', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Cover.Container height="medium">
        <Cover src={imageLinks.dark} />
      </Cover.Container>
    </Base>
  ))

  .add('Video', () => (
    <Base margin={{ all: 'large' }}>
      <Cover.Container height="medium">
        <Cover as={Video} autoplay loop muted playsInline>
          <Video.Source src={videoSources.mp4} type="video/mp4" />
          <Video.Source src={videoSources.ogg} type="video/ogg" />
        </Cover>
      </Cover.Container>
    </Base>
  ))

  .add('Iframe', () => (
    <Base margin={{ all: 'large' }}>
      <Cover.Container height="medium">
        <Cover
          as="iframe"
          src={videoSources.embed}
          width={560}
          height={315}
          frameBorder={0}
          allowFullScreen
        />
      </Cover.Container>
    </Base>
  ))

  .add('Responsive height', () => (
    <Base margin={{ all: 'large' }}>
      <Cover.Container aspectRatio={{ height: 200, width: 400 }}>
        <Cover src={imageLinks.dark} />
      </Cover.Container>
    </Base>
  ))

  .add('Viewport height', () => (
    <Base margin={{ all: 'large' }}>
      <Cover.Container viewport>
        <Cover src={imageLinks.dark} />
      </Cover.Container>
    </Base>
  ));
