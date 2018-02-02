import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Alert,
  Block,
  Button,
  Close,
  Container,
  Modal,
} from '../../components';

Close.displayName = 'Close';

storiesOf('Close', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Close />
    </Container>
  ))

  .add('Large modifier', () => (
    <Container margin={{ all: 'large' }}>
      <Close large />
    </Container>
  ))

  .add('Close in alerts', () => (
    <Container margin={{ all: 'large' }}>
      <Alert closeable>{faker.lorem.sentence()}</Alert>
    </Container>
  ))

  .add('Close in modals', () => (
    <Container margin={{ all: 'large' }}>
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
    </Container>
  ));
