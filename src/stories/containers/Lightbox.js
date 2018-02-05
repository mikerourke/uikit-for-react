import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Block, Grid, Heading, Lightbox } from '../../components';

Lightbox.displayName = 'Lightbox';

const imageLinks = [
  'https://getuikit.com/docs/images/photo.jpg',
  'https://getuikit.com/docs/images/dark.jpg',
  'https://getuikit.com/docs/images/light.jpg',
];

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
  <div>
    <Heading as="h3">{props.animationName}</Heading>
    <Lightbox
      as={Grid}
      childWidth={{ atMd: '1/3' }}
      animation={props.animationName.toLowerCase()}
    >
      {imageLinks.map((imageLink, linkIdx) => (
        <Grid.Cell key={imageLink}>
          <Lightbox.Item
            inline
            source={imageLink}
            caption={`Caption ${linkIdx + 1}`}
          >
            <img src={imageLink} alt="" />
          </Lightbox.Item>
        </Grid.Cell>
      ))}
    </Lightbox>
  </div>
);

storiesOf('Lightbox', module)
  .add('Basic Usage', () => (
    <SimpleLightbox>
      <Lightbox.Item source={imageLinks[0]} />
    </SimpleLightbox>
  ))

  .add('Caption', () => (
    <SimpleLightbox>
      <Lightbox.Item source={imageLinks[0]} caption="Caption" />
    </SimpleLightbox>
  ))

  .add('Animations', () => (
    <Block margin={{ all: 'large' }}>
      <AnimationLightbox animationName="Slide" />
      <AnimationLightbox animationName="Fade" />
      <AnimationLightbox animationName="Scale" />
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
        <Lightbox.Item source={imageLinks[0]} caption="Hooray" />
      </Lightbox.Panel>
    </Block>
  ));
