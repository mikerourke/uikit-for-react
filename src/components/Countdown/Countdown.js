import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { getOptionsString } from '../../lib';
import { BlockElement } from '../Base';
import CountdownDays from './CountdownDays';
import CountdownHours from './CountdownHours';
import CountdownLabel from './CountdownLabel';
import CountdownMinutes from './CountdownMinutes';
import CountdownSeconds from './CountdownSeconds';
import CountdownSeparator from './CountdownSeparator';

export default class Countdown extends React.Component {
  static displayName = 'Countdown';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    date: PropTypes.string.isRequired,
    paused: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
    paused: false,
  };

  static Days = CountdownDays;
  static Hours = CountdownHours;
  static Minutes = CountdownMinutes;
  static Seconds = CountdownSeconds;
  static Label = CountdownLabel;
  static Separator = CountdownSeparator;

  componentWillReceiveProps(nextProps) {
    const selector = this.ref instanceof Countdown ? this.ref : '.uk-countdown';
    if (nextProps.paused === true && this.props.paused === false) {
      UIkit.countdown(selector).stop();
    }

    if (nextProps.paused === false && this.props.paused === true) {
      UIkit.countdown(selector).start();
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const { className, date, paused, ...rest } = this.props;
    const classes = classnames(className, 'uk-countdown');
    return (
      <BlockElement
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-countdown={getOptionsString({ date })}
      />
    );
  }
}
