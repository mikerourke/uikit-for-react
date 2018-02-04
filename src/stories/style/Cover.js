import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Cover, Video } from '../../components';

Cover.displayName = 'Cover';

const mediaLink = 'https://getuikit.com/docs/images/dark.jpg';

storiesOf('Cover', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Cover.Container height="medium">
        <Cover src={mediaLink} />
      </Cover.Container>
    </Container>
  ))

  .add('Video', () => (
    <Container margin={{ all: 'large' }}>
      <Cover.Container height="medium">
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
    </Container>
  ))

  .add('Iframe', () => (
    <Container margin={{ all: 'large' }}>
      <Cover.Container height="medium">
        <Cover
          as="iframe"
          src="//www.youtube.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent"
          width={560}
          height={315}
          frameBorder={0}
          allowFullScreen
        />
      </Cover.Container>
    </Container>
  ))

  .add('Responsive height', () => (
    <Container margin={{ all: 'large' }}>
      <Cover.Container aspectRatio={{ height: 200, width: 400 }}>
        <Cover src={mediaLink} />
      </Cover.Container>
    </Container>
  ))

  .add('Viewport height', () => (
    <Container margin={{ all: 'large' }}>
      <Cover.Container viewport>
        <Cover src={mediaLink} />
      </Cover.Container>
    </Container>
  ));
