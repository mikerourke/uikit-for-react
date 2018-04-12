import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getOptionsString, HTML } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
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
    this.ref = null;
    this.countdown = null;
  }

  componentDidMount() {
    this.countdown = UIkit.countdown(this.ref);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.paused !== nextProps.paused) {
      if (this.props.paused === false) {
        this.countdown.stop();
      }
      if (this.props.paused === true) {
        this.countdown.start();
      }
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { className, date, paused, ...rest } = this.props;

    const classes = classnames(className, 'uk-countdown');

    return (
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          className={classes}
          component={Countdown}
          uk-countdown={getOptionsString({ date })}
        />
      </Ref>
    );
  }
}
