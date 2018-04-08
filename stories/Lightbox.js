import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Block, Button, Grid, Heading, Lightbox } from '../src/components';
import { imageLinks, videoSources } from './common';

Lightbox.displayName = 'Lightbox';

const imageLinkValues = [imageLinks.photo, imageLinks.dark, imageLinks.light];

class SimpleLightbox extends React.Component {
  state = {
    shown: false,
  };

  render() {
    return (
      <Block margin={{ all: 'large' }}>
        <Button onClick={() => this.setState({ shown: !this.state.shown })}>
          Open Lightbox
        </Button>
        <Lightbox shown={this.state.shown}>{this.props.children}</Lightbox>
      </Block>
    );
  }
}

const AnimationLightbox = props => (
  <Block margin={{ bottom: 'large' }}>
    <Heading as="div" size="h3">
      {props.animationName}
    </Heading>
    <Lightbox
      as={Grid}
      childWidth={{ atMd: '1/3' }}
      animation={props.animationName.toLowerCase()}
    >
      {imageLinkValues.map((imageLink, linkIdx) => (
        <Grid.Cell key={imageLink}>
          <Lightbox.Item
            inline
            href={imageLink}
            caption={`Caption ${linkIdx + 1}`}
          >
            <img src={imageLink} alt="" />
          </Lightbox.Item>
        </Grid.Cell>
      ))}
    </Lightbox>
  </Block>
);

storiesOf('Lightbox', module)
  .add('Usage', () => (
    <SimpleLightbox>
      <Lightbox.Item href={imageLinks.photo} />
    </SimpleLightbox>
  ))

  .add('Caption', () => (
    <SimpleLightbox>
      <Lightbox.Item href={imageLinks.photo} caption="Caption" />
    </SimpleLightbox>
  ))

  .add('Animations', () => (
    <Block margin={{ all: 'large' }}>
      <AnimationLightbox animationName="Slide" />
      <AnimationLightbox animationName="Fade" />
      <AnimationLightbox animationName="Scale" />
    </Block>
  ))

  .add('Content sources', () => (
    <Block margin={{ all: 'large' }}>
      <Lightbox>
        <Lightbox.Item as={Button} href={imageLinks.photo} caption="Image">
          Image
        </Lightbox.Item>
        <Lightbox.Item as={Button} href={videoSources.mp4} caption="Video">
          Video
        </Lightbox.Item>
        <Lightbox.Item
          as={Button}
          href="//www.youtube.com/watch?v=YE7VzlLtp-4"
          caption="YouTube"
        >
          YouTube
        </Lightbox.Item>
        <Lightbox.Item as={Button} href="//vimeo.com/1084537" caption="Vimeo">
          Vimeo
        </Lightbox.Item>
        <Lightbox.Item
          as={Button}
          href="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938"
          caption="Google Maps"
          type="iframe"
        >
          Google Maps
        </Lightbox.Item>
      </Lightbox>
    </Block>
  ))

  .add('Panel API and Event Listeners', () => (
    <Block margin={{ all: 'large' }}>
      <Lightbox.Panel
        onBeforeHide={action('onBeforeHide')}
        onBeforeItemHide={action('onBeforeItemHide')}
        onBeforeItemShow={action('onBeforeItemShow')}
        onBeforeShow={action('onBeforeShow')}
        onHidden={action('onHidden')}
        onHide={action('onHide')}
        onItemHidden={action('onItemHidden')}
        onItemHide={action('onItemHide')}
        onItemLoad={action('onItemLoad')}
        onItemShow={action('onItemShow')}
        onItemShown={action('onItemShown')}
      >
        <Lightbox.Item source={imageLinkValues[0]} caption="Hooray" href="#" />
      </Lightbox.Panel>
    </Block>
  ));
