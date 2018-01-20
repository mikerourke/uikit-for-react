import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Container from '../components/Container';

Modal.displayName = 'Modal';

storiesOf('Modal', module).add('Basic Usage', () => {
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
          <Modal shown={this.state.modalShown} />
        </Container>
      );
    }
  }
});
