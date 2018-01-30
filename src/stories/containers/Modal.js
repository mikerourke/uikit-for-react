import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Button, Modal, Container } from '../../components';

Modal.displayName = 'Modal';

class ModalExample extends React.Component {
  state = {
    modalShown: false,
  };

  handleClick = () =>
    this.setState(state => ({ modalShown: !state.modalShown }));

  render() {
    return (
      <Container margin={{ all: 'large' }}>
        <Button primary onClick={this.handleClick}>
          Open
        </Button>
        <Modal {...this.props} shown={this.state.modalShown} />
      </Container>
    );
  }
}

storiesOf('Modal', module).add('Basic Usage', () => (
  <ModalExample padContent>
    <Modal.Title>Headline</Modal.Title>
    <Modal.Content as="p">{faker.lorem.paragraph()}</Modal.Content>
    <Block textAlign="right">
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </Block>
  </ModalExample>
));
