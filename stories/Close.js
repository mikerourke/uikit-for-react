import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Alert,
  Block,
  Button,
  Close,
  Modal,
  Paragraph,
} from '../src/components';

Close.displayName = 'Close';

storiesOf('Close', module)
  .add('Usage', () => (
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
      <Alert closeable>
        <p>{faker.lorem.sentence()}</p>
      </Alert>
    </Block>
  ))

  .add('Close in modals', () => (
    <Block margin={{ all: 'large' }}>
      <Modal toggle={<Button>Open modal</Button>}>
        <Modal.Dialog body>
          <Modal.Close />
          <Modal.Title>Headline</Modal.Title>
          <Modal.Content>
            <p>{faker.lorem.paragraph()}</p>
            <Paragraph textAlign="right">
              <Modal.Close as={Button}>Cancel</Modal.Close>
              <Button primary>Save</Button>
            </Paragraph>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </Block>
  ));
