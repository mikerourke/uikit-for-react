import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Button from '../components/elements/Button';
import Notification from '../components/elements/Notification';
import Container from '../components/layout/Container';

Notification.displayName = 'Notification';

storiesOf('Notification', module).add('Basic Usage', () => {
  class Notifier extends React.Component {
    state = {
      shown: false,
    };

    handleClick = () => this.setState(state => ({ shown: !state.shown }));

    handleShown = () => {
      console.log('Shown');
    };

    render() {
      return (
        <Container margin={{ all: 'large' }}>
          <Button onClick={this.handleClick}>Test</Button>
          <Notification
            shown={this.state.shown}
            timeout={20000}
            onClose={this.handleShown}
          >
            <div>
              <Button>Test</Button>
            </div>
          </Notification>
        </Container>
      );
    }
  }

  return <Notifier />;
});
