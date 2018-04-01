import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import CountdownLabel from './CountdownLabel';

export default class CountdownDays extends React.Component {
  static displayName = 'CountdownDays';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div', 'span'),
    label: PropTypes.instanceOf(CountdownLabel),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
  };

  render() {
    const { className, label, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-countdown-days',
      'uk-countdown-number',
    );

    const BaseComponent = (
      <Base {...rest} className={classes} component={CountdownDays} />
    );

    if (!label) return BaseComponent;

    return (
      <div>
        {BaseComponent}
        {label}
      </div>
    );
  }
}
