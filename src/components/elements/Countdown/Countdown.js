import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { generateSelector, getBaseRef, getOptionsString } from '../../../lib';
import { BlockElement } from '../../base';
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
    className: '',
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
      <BlockElement
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-countdown={getOptionsString({ date })}
      />
    );
  }
}
