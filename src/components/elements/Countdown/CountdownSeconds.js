import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import CountdownLabel from './CountdownLabel';

export default class CountdownSeconds extends React.Component {
  static displayName = 'CountdownSeconds';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div', 'span'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    label: PropTypes.instanceOf(CountdownLabel),
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const { as, className, flex, label, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-countdown-seconds',
      'uk-countdown-number',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(CountdownSeconds, as);
    if (!label) return <Element {...rest} className={classes} />;
    return (
      <div>
        <Element {...rest} className={classes} />
        {label}
      </div>
    );
  }
}
