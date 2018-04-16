// TODO: Finish this component (need to add additional functionality).
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import noop from 'lodash/noop';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

export default class Progress extends React.Component {
  static displayName = 'Progress';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('progress'),
    interval: PropTypes.number,
    loop: PropTypes.bool,
    max: PropTypes.number.isRequired,
    onComplete: PropTypes.func,
    step: ExtraPropTypes.requiredBy('interval', PropTypes.number),
    value: PropTypes.number.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'progress',
    onComplete: noop,
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    if (this.props.interval) {
      this.performCycle();
    }
  }

  performCycle = () => {
    const { interval, onComplete, step } = this.props;
    UIkit.util.ready(() => {
      const bar = this.ref;
      const animate = setInterval(() => {
        bar.value += step;
        if (bar.value >= bar.max) {
          clearInterval(animate);
          onComplete();
        }
      });
    }, interval);
  };

  handleRef = element => (this.ref = element);

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-progress');

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} className={classes} component={Progress} />
      </Ref>
    );
  }
}
