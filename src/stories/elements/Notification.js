import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Button, Base, Notification } from '../../components';

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
        <Base margin={{ all: 'large' }}>
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
        </Base>
      );
    }
  }

  return <Notifier />;
});
