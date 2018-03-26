import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import drop from 'lodash/drop';
import { Button, Base, Grid, Heading, Lightbox } from '../../components';
import { imageLinks } from '../common';

Lightbox.displayName = 'Lightbox';

const imageLinkValues = drop(Object.values(imageLinks));

class SimpleLightbox extends React.Component {
  state = {
    shown: false,
  };

  render() {
    return (
      <Base margin={{ all: 'large' }}>
        <Button onClick={() => this.setState({ shown: !this.state.shown })}>
          Open Lightbox
        </Button>
        <Lightbox shown={this.state.shown}>{this.props.children}</Lightbox>
      </Base>
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
      {imageLinkValues.map((imageLink, linkIdx) => (
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
  .add('Usage', () => (
    <SimpleLightbox>
      <Lightbox.Item source={imageLinkValues[0]} />
    </SimpleLightbox>
  ))

  .add('Caption', () => (
    <SimpleLightbox>
      <Lightbox.Item source={imageLinkValues[0]} caption="Caption" />
    </SimpleLightbox>
  ))

  .add('Animations', () => (
    <Base margin={{ all: 'large' }}>
      <AnimationLightbox animationName="Slide" />
      <AnimationLightbox animationName="Fade" />
      <AnimationLightbox animationName="Scale" />
    </Base>
  ))

  .add('Panel API and Event Listeners', () => (
    <Base margin={{ all: 'large' }}>
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
        <Lightbox.Item source={imageLinkValues[0]} caption="Hooray" />
      </Lightbox.Panel>
    </Base>
  ));
