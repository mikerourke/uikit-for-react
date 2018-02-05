import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Alert,
  Block,
  Button,
  Close,
  Modal,
} from '../../components';

Close.displayName = 'Close';

storiesOf('Close', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Close />
    </Block>
  ))

  .add('Large modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Close large />
    </Block>
  ))

  .add('Close in alerts', () => (
    <Block margin={{ all: 'large' }}>
      <Alert closeable>{faker.lorem.sentence()}</Alert>
    </Block>
  ))

  .add('Close in modals', () => (
    <Block margin={{ all: 'large' }}>
      <Modal toggle={<Button>Open modal</Button>}>
        <Modal.Dialog padContent>
          <Modal.Close />
          <Modal.Title>Headline</Modal.Title>
          <Modal.Content>
            <p>{faker.lorem.paragraph()}</p>
            <Block as="p" textAlign="right">
              <Modal.Close as={Button}>Cancel</Modal.Close>
              <Button primary>Save</Button>
            </Block>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </Block>
  ));
