import React from 'react';
import faker from 'faker';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import { Base, Button, Grid, Heading, Modal, Toggle } from '../../components';
import { imageLinks } from '../common';

Modal.displayName = 'Modal';

storiesOf('Modal', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button} margin={{ right: 'small' }}>
          Open
        </Toggle.Toggle>
        <Toggle.Toggle as="a">Open</Toggle.Toggle>
        <Toggle.Target as={Modal}>
          <Modal.Dialog padContent>
            <Modal.Title>Headline</Modal.Title>
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
            <Base textAlign="right">
              <Modal.Close as={Button}>Cancel</Modal.Close>
              <Button primary>Save</Button>
            </Base>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Base>
  ))

  .add('Close button', () => (
    <Base margin={{ all: 'large' }}>
      <Toggle.Togglable as="span">
        <Toggle.Toggle as={Button} margin={{ right: 'small' }}>
          Default
        </Toggle.Toggle>
        <Toggle.Target as={Modal}>
          <Modal.Dialog padContent>
            <Modal.Close />
            <Modal.Title>Headline</Modal.Title>
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
      <Toggle.Togglable as="span">
        <Toggle.Toggle as={Button}>Outside</Toggle.Toggle>
        <Toggle.Target as={Modal} padContent>
          <Modal.Close outside />
          <Modal.Title>Headline</Modal.Title>
          <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
        </Toggle.Target>
      </Toggle.Togglable>
    </Base>
  ))

  .add('Center modal', () => (
    <Base margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal} alignItems="top">
          <Modal.Dialog padContent margin={{ vertical: 'auto' }}>
            <Modal.Close />
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Base>
  ))

  .add('Header and footer', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ))

  .add('Container modifier', () => (
    <Base margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal} container>
          <Modal.Dialog padContent>
            <Modal.Close />
            <Modal.Title>Headline</Modal.Title>
            <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          </Modal.Dialog>
        </Toggle.Target>
      </Toggle.Togglable>
    </Base>
  ))

  .add('Full modifier', () => (
    <Base margin={{ all: 'large' }}>
      <Toggle.Togglable>
        <Toggle.Toggle as={Button}>Open</Toggle.Toggle>
        <Toggle.Target as={Modal} full>
          <Modal.Dialog>
            <Modal.Close full large />
            <Modal.Title>Headline</Modal.Title>
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
    </Base>
  ))

  .add('Overflow', () => (
    <Base margin={{ all: 'large' }}>
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
    </Base>
  ));
