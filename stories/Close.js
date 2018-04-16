import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Alert,
  Division,
  Button,
  Close,
  Modal,
  Paragraph,
} from '../src/components';

Close.displayName = 'Close';

storiesOf('Close', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Close />
    </Division>
  ))

  .add('Large modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Close large />
    </Division>
  ))

  .add('Close in alerts', () => (
    <Division margin={{ all: 'large' }}>
      <Alert closeable>
        <p>{faker.lorem.sentence()}</p>
      </Alert>
    </Division>
  ))

  .add('Close in modals', () => (
    <Division margin={{ all: 'large' }}>
      <Modal toggle={<Button>Open modal</Button>}>
        <Modal.Dialog body>
          <Modal.Close />
          <Modal.Title>Headline</Modal.Title>
          <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
          <Paragraph textAlign="right">
            <Modal.Close as={Button}>Cancel</Modal.Close>
            <Button primary>Save</Button>
          </Paragraph>
        </Modal.Dialog>
      </Modal>
    </Division>
  ));
