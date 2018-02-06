import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import CountdownLabel from './CountdownLabel';

export default class CountdownHours extends React.Component {
  static displayName = 'CountdownHours';

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
      'uk-countdown-hours',
      'uk-countdown-number',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(CountdownHours, as);
    if (!label) return <Element {...rest} className={classes} />;
    return (
      <div>
        <Element {...rest} className={classes} />
        {label}
      </div>
    );
  }
}
