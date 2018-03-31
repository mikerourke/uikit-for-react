import React from 'react';
import faker from 'faker';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import {
  Block,
  Button,
  Grid,
  Heading,
  Margin,
  Modal,
  Paragraph,
  Toggle,
  Video,
} from '../../src/components';
import { imageLinks, videoSources } from '../common';

Modal.displayName = 'Modal';

storiesOf('Modal', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button} margin={{ right: 'small' }}>
          Open
        </Toggle.Toggle>
        <Toggle.Toggle as="a">Open</Toggle.Toggle>
        <Toggle.Target as={Modal}>
          <Modal.Dialog body>
            <Modal.Title>Headline</Modal.Title>
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
            <Paragraph textAlign="right">
              <Modal.Close as={Button}>Cancel</Modal.Close>
              <Button primary>Save</Button>
            </Paragraph>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Block>
  ))

  .add('Close button', () => (
    <Block margin={{ all: 'large' }} flex>
      <Toggle.Togglable as="div">
        <Toggle.Toggle as={Button} margin={{ right: 'small' }}>
          Default
        </Toggle.Toggle>
        <Toggle.Target as={Modal}>
          <Modal.Dialog body>
            <Modal.Close />
            <Modal.Title>Default</Modal.Title>
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
      <Toggle.Togglable as="div">
        <Toggle.Toggle as={Button}>Outside</Toggle.Toggle>
        <Toggle.Target as={Modal}>
          <Modal.Dialog body>
            <Modal.Close outside />
            <Modal.Title>Headline</Modal.Title>
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Block>
  ))

  .add('Center modal', () => (
    <Block margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal} alignItems="top">
          <Modal.Dialog body margin={{ vertical: 'auto' }}>
            <Modal.Close />
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Block>
  ))

  .add('Header and footer', () => (
    <Block margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal}>
          <Modal.Dialog>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title as="h2">Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
            </Modal.Body>
            <Modal.Footer textAlign="right">
              <Modal.Close as={Button}>Cancel</Modal.Close>
              <Button primary>Save</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Block>
  ))

  .add('Container modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal} container>
          <Modal.Dialog body>
            <Modal.Close />
            <Modal.Title>Headline</Modal.Title>
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Block>
  ))

  .add('Full modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal} full>
          <Modal.Dialog>
            <Modal.Close full large />
            <Modal.Content
              as={Grid}
              gutter="collapse"
              childWidth={{ atSm: '1/2' }}
              alignItems="middle"
            >
              <Grid.Cell
                background={{
                  cover: true,
                  imageUrl: imageLinks.photo,
                }}
                viewport
              />
              <Grid.Cell padding="large">
                <Heading as="h1">Headline</Heading>
                <p>{faker.lorem.paragraph()}</p>
              </Grid.Cell>
            </Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Block>
  ))

  .add('Overflow', () => (
    <Block margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal}>
          <Modal.Dialog>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Headline</Modal.Title>
            </Modal.Header>
            <Modal.Body overflow="auto">
              {range(0, 9).map(paraNumber => (
                <p key={paraNumber}>{faker.lorem.paragraph()}</p>
              ))}
            </Modal.Body>
            <Modal.Footer textAlign="right">
              <Modal.Close as={Button} type="button">
                Cancel
              </Modal.Close>
              <Button primary>Save</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Block>
  ))

  .add('Media', () => (
    <Block margin={{ all: 'large' }}>
      <Margin as="p">
        <Toggle as={Button} target="#modal-media-image">
          Image
        </Toggle>
        <Button as="a" target="#modal-media-video">
          Video
        </Button>
        <Button as={Toggle} target="#modal-media-youtube">
          Youtube
        </Button>
        <Button as="a" target="#modal-media-vimeo">
          Vimeo
        </Button>
      </Margin>

      <Modal id="modal-media-image" alignItems="top">
        <Modal.Dialog width="auto" margin={{ vertical: 'auto' }}>
          <Modal.Close outside />
          <Modal.Content as="img" src={imageLinks.photo} />
        </Modal.Dialog>
      </Modal>
      <Modal id="modal-media-video" alignItems="top">
        <Modal.Dialog width="auto" margin={{ vertical: 'auto' }}>
          <Modal.Close outside />
          <Modal.Content as={Video} controls playsInline>
            <Video.Source src={videoSources.mp4} type="video/mp4" />
            <Video.Source src={videoSources.ogg} type="video/ogg" />
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
      <Modal id="modal-media-youtube" alignItems="top">
        <Modal.Dialog width="auto" margin={{ vertical: 'auto' }}>
          <Modal.Close outside />
          <Modal.Content>
            <Video
              as="iframe"
              src={videoSources.youtube}
              width={560}
              height={315}
              frameBorder={0}
            />
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
      <Modal id="modal-media-vimeo" alignItems="top">
        <Modal.Dialog width="auto" margin={{ vertical: 'auto' }}>
          <Modal.Close outside />
          <Modal.Content>
            <Video
              as="iframe"
              src={videoSources.vimeo}
              width={500}
              height={281}
              frameBorder={0}
            />
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </Block>
  ));
