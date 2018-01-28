import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Modal, Container } from '../../components';

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
