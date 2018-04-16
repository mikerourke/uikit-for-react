import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import startCase from 'lodash/startCase';
import without from 'lodash/without';
import { Division, Button, Icon, Margin, Notification } from '../src/components';
import { UIK } from '../src/lib';

Notification.displayName = 'Notification';

const validPositions = without(
  UIK.X_Y_POSITIONS,
  'center-left',
  'center-right',
);

const validStatuses = without(UIK.STATUS_COLORS, 'muted');

class SharedNotifier extends React.Component {
  state = {
    shown: false,
  };

  handleClick = () => this.setState({ shown: true });

  handleClose = () => {
    this.setState({ shown: false });
    if (this.props.onClose) this.props.onClose();
  };

  render() {
    const { button, ...rest } = this.props;
    const ToggleButton = React.cloneElement(button, {
      onClick: this.handleClick,
    });

    return (
      <Fragment>
        {ToggleButton}
        <Notification
          shown={this.state.shown}
          onClose={this.handleClose}
          {...rest}
        />
      </Fragment>
    );
  }
}

storiesOf('Notification', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <SharedNotifier button={<Button>Test</Button>}>
        Notification message
      </SharedNotifier>
    </Division>
  ))

  .add('HTML message', () => (
    <Division margin={{ all: 'large' }}>
      <SharedNotifier button={<Button>With icon</Button>}>
        <Icon name="check" /> Message with an icon
      </SharedNotifier>
    </Division>
  ))

  .add('Position', () => (
    <Division margin={{ all: 'large' }}>
      <Margin as="p">
        {validPositions.map(positionValue => (
          <SharedNotifier
            key={positionValue}
            position={positionValue}
            button={<Button>{startCase(positionValue)}</Button>}
          >
            {startCase(positionValue)}
          </SharedNotifier>
        ))}
      </Margin>
    </Division>
  ))

  .add('Style', () => (
    <Division margin={{ all: 'large' }}>
      <Margin as="p">
        {validStatuses.map(status => (
          <SharedNotifier
            key={status}
            status={status}
            button={<Button>{startCase(status)}</Button>}
          >
            {startCase(status)} message...
          </SharedNotifier>
        ))}
      </Margin>
    </Division>
  ))

  .add('Close all', () => (
    <Division margin={{ all: 'large' }}>
      <Button onClick={() => Notification.closeAll()}>Close All</Button>
      {[1, 2, 3, 4].map(index => (
        <Notification key={index} shown timeout={20000}>
          Notification {index}
        </Notification>
      ))}
    </Division>
  ))

  .add('Event handlers', () => (
    <Division margin={{ all: 'large' }}>
      <SharedNotifier
        button={<Button>Show</Button>}
        onClose={action('onClose')}
      >
        onClose event will fire...
      </SharedNotifier>
    </Division>
  ));
