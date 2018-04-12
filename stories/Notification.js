import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import startCase from 'lodash/startCase';
import without from 'lodash/without';
import { Block, Button, Icon, Margin, Notification } from '../src/components';
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
    <Block margin={{ all: 'large' }}>
      <SharedNotifier button={<Button>Test</Button>}>
        Notification message
      </SharedNotifier>
    </Block>
  ))

  .add('HTML message', () => (
    <Block margin={{ all: 'large' }}>
      <SharedNotifier button={<Button>With icon</Button>}>
        <Icon name="check" /> Message with an icon
      </SharedNotifier>
    </Block>
  ))

  .add('Position', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Style', () => (
    <Block margin={{ all: 'large' }}>
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
    </Block>
  ))

  .add('Close all', () => (
    <Block margin={{ all: 'large' }}>
      <Button onClick={() => Notification.closeAll()}>Close All</Button>
      {[1, 2, 3, 4].map(index => (
        <Notification key={index} shown timeout={20000}>
          Notification {index}
        </Notification>
      ))}
    </Block>
  ))

  .add('Event handlers', () => (
    <Block margin={{ all: 'large' }}>
      <SharedNotifier
        button={<Button>Show</Button>}
        onClose={action('onClose')}
      >
        onClose event will fire...
      </SharedNotifier>
    </Block>
  ));
