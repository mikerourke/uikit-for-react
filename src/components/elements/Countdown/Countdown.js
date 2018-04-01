import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  getOptionsString,
  HTML,
  LibraryComponent,
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

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('countdown');
  }

  componentWillReceiveProps(nextProps) {
    const countdown = UIkit.countdown(this.libComp.cssSelector);
    if (nextProps.paused === true && this.props.paused === false) {
      countdown.stop();
    }
    if (nextProps.paused === false && this.props.paused === true) {
      countdown.start();
    }
  }

  render() {
    const { className, date, paused, ...rest } = this.props;

    const classes = classnames(className, 'uk-countdown');

    return (
      <Base
        {...rest}
        className={classes}
        component={Countdown}
        uk-countdown={getOptionsString({ date })}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
