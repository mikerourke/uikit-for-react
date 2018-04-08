/* eslint-disable no-console */
import React from 'react';
import faker from 'faker';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
} from '../src/components';
import { imageLinks, videoSources } from './common';

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
        <Toggle.Target as={Modal} flex={{ alignItems: 'top', display: false }}>
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
        <Modal.Toggle as={Button} forModal="modal-media-image">
          Image
        </Modal.Toggle>
        <Modal.Toggle as={Button} forModal="modal-media-video">
          Video
        </Modal.Toggle>
        <Modal.Toggle as={Button} forModal="modal-media-youtube">
          Youtube
        </Modal.Toggle>
        <Modal.Toggle as={Button} forModal="modal-media-vimeo">
          Vimeo
        </Modal.Toggle>
      </Margin>

      <Modal
        modalName="modal-media-image"
        flex={{ alignItems: 'top', display: false }}
      >
        <Modal.Dialog width="auto" margin={{ vertical: 'auto' }}>
          <Modal.Close outside />
          <Modal.Content as="img" src={imageLinks.photo} />
        </Modal.Dialog>
      </Modal>
      <Modal
        modalName="modal-media-video"
        flex={{ alignItems: 'top', display: false }}
      >
        <Modal.Dialog width="auto" margin={{ vertical: 'auto' }}>
          <Modal.Close outside />
          <Modal.Content as={Video} controls playsInline>
            <Video.Source src={videoSources.mp4} type="video/mp4" />
            <Video.Source src={videoSources.ogg} type="video/ogg" />
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
      <Modal
        modalName="modal-media-youtube"
        flex={{ alignItems: 'top', display: false }}
      >
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
      <Modal
        modalName="modal-media-vimeo"
        flex={{ alignItems: 'top', display: false }}
      >
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
  ))

  .add('Groups', () => (
    <Block margin={{ all: 'large' }}>
      <Margin as="p">
        <Modal.Toggle as={Button} forModal="modal-group-1">
          Modal 1
        </Modal.Toggle>
        <Modal.Toggle as={Button} forModal="modal-group-2">
          Modal 2
        </Modal.Toggle>
      </Margin>

      <Modal
        modalName="modal-group-1"
        flex={{ alignItems: 'top', display: false }}
      >
        <Modal.Dialog>
          <Modal.Close />
          <Modal.Header>
            <Modal.Title>Headline 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{faker.lorem.paragraph()}</p>
          </Modal.Body>
          <Modal.Footer textAlign="right">
            <Modal.Close as={Button}>Cancel</Modal.Close>
            <Modal.Toggle as={Button} forModal="modal-group-2" primary>
              Next
            </Modal.Toggle>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      <Modal
        modalName="modal-group-2"
        flex={{ alignItems: 'top', display: false }}
      >
        <Modal.Dialog>
          <Modal.Close />
          <Modal.Header>
            <Modal.Title>Headline 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{faker.lorem.paragraph()}</p>
          </Modal.Body>
          <Modal.Footer textAlign="right">
            <Modal.Close as={Button}>Cancel</Modal.Close>
            <Modal.Toggle as={Button} forModal="modal-group-1" primary>
              Next
            </Modal.Toggle>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </Block>
  ))

  .add('Modal dialogs', () => (
    <Block margin={{ all: 'large' }}>
      <Margin as="p">
        <Modal.Dialog toggle={<Button>Dialog</Button>}>
          <Modal.Body as="p">UIkit dialog!</Modal.Body>
        </Modal.Dialog>
        <Modal.Alert
          toggle={<Button>Alert</Button>}
          onClose={action('Alert: onClose')}
        >
          UIkit alert!
        </Modal.Alert>
        <Modal.Confirm
          toggle={<Button>Confirm</Button>}
          onCancel={action('Confirm: onCancel')}
          onConfirm={action('Confirm: onConfirm')}
        >
          UIkit confirm
        </Modal.Confirm>
        <Modal.Prompt
          toggle={<Button>Prompt</Button>}
          onConfirm={action('Prompt: onConfirm')}
          label="Name:"
          placeholder="Your name"
        />
      </Margin>
    </Block>
  ));
