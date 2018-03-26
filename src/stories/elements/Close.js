import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Alert, Base, Button, Close, Modal } from '../../components';

Close.displayName = 'Close';

storiesOf('Close', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Close />
    </Base>
  ))

  .add('Large modifier', () => (
    <Base margin={{ all: 'large' }}>
      <Close large />
    </Base>
  ))

  .add('Close in alerts', () => (
    <Base margin={{ all: 'large' }}>
      <Alert closeable>{faker.lorem.sentence()}</Alert>
    </Base>
  ))

  .add('Close in modals', () => (
    <Base margin={{ all: 'large' }}>
      <Modal toggle={<Button>Open modal</Button>}>
        <Modal.Dialog padContent>
          <Modal.Close />
          <Modal.Title>Headline</Modal.Title>
          <Modal.Content>
            <p>{faker.lorem.paragraph()}</p>
            <Base as="p" textAlign="right">
              <Modal.Close as={Button}>Cancel</Modal.Close>
              <Button primary>Save</Button>
            </Base>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </Base>
  ));
