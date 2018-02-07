import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  HTML,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';
import CountdownDays from './CountdownDays';
import CountdownHours from './CountdownHours';
import CountdownLabel from './CountdownLabel';
import CountdownMinutes from './CountdownMinutes';
import CountdownSeconds from './CountdownSeconds';
import CountdownSeparator from './CountdownSeparator';

export default class Countdown extends React.Component {
  static displayName = 'Countdown';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    date: PropTypes.string.isRequired,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    paused: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
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
    const {
      as,
      className,
      date,
      flex,
      inverse,
      margin,
      paused,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      this.selector,
      'uk-countdown',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({ date });
    const Element = getElementType(Countdown, as);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-countdown={componentOptions}
      />
    );
  }
}
