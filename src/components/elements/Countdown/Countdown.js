import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getOptionsString,
  HTML,
} from '../../../lib';
import Base from '../../base';
import CountdownDays from './CountdownDays';
import CountdownHours from './CountdownHours';
import CountdownLabel from './CountdownLabel';
import CountdownMinutes from './CountdownMinutes';
import CountdownSeconds from './CountdownSeconds';
import CountdownSeparator from './CountdownSeparator';

export default class Countdown extends React.Component {
  static displayName = 'Countdown';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    date: PropTypes.string.isRequired,
    paused: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    paused: false,
  };

  static Days = CountdownDays;
  static Hours = CountdownHours;
  static Minutes = CountdownMinutes;
  static Seconds = CountdownSeconds;
  static Label = CountdownLabel;
  static Separator = CountdownSeparator;

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentWillReceiveProps(nextProps) {
    const countdown = UIkit.countdown(this.getRef());
    if (nextProps.paused === true && this.props.paused === false) {
      countdown.stop();
    }
    if (nextProps.paused === false && this.props.paused === true) {
      countdown.start();
    }
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const { className, date, paused, ...rest } = this.props;
    const classes = classnames(className, this.selector, 'uk-countdown');
    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={Countdown}
        uk-countdown={getOptionsString({ date })}
      />
    );
  }
}
