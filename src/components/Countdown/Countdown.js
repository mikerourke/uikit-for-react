import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { isNil } from 'lodash';
import {
  getElementType,
  getOptionsString,
} from '../../lib';
import { Block } from '../Base';
import CountdownDays from './CountdownDays';
import CountdownHours from './CountdownHours';
import CountdownLabel from './CountdownLabel';
import CountdownMinutes from './CountdownMinutes';
import CountdownSeconds from './CountdownSeconds';
import CountdownSeparator from './CountdownSeparator';

export default class Countdown extends Block {
  static meta = {
    name: 'Countdown',
    ukClass: 'uk-countdown',
  };

  static propTypes = {
    ...Block.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    // TODO: Add validation to ensure date is in correct format and in the future.
    date: PropTypes.string.isRequired,
    paused: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    paused: false,
  };

  static Days = CountdownDays;
  static Hours = CountdownHours;
  static Minutes = CountdownMinutes;
  static Seconds = CountdownSeconds;
  static Label = CountdownLabel;
  static Separator = CountdownSeparator;

  componentWillReceiveProps(nextProps) {
    const selector = (this.ref instanceof Countdown) ? this.ref : `.${Countdown.meta.ukClass}`;
    if (nextProps.paused === true && this.props.paused === false) {
      UIkit.countdown(selector).stop();
    }

    if (nextProps.paused === false && this.props.paused === true) {
      UIkit.countdown(selector).start();
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      as,
      children,
      className,
      date,
      paused,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Countdown.meta.ukClass,
    );

    const Element = getElementType(Countdown, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={blockStyle}
        data-uk-countdown={getOptionsString({ date })}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
