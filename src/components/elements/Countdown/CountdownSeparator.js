import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class CountdownSeparator extends React.Component {
  static displayName = 'CountdownSeparator';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div', 'span'),
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-countdown-separator',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(CountdownSeparator, as);
    return <Element {...rest} className={classes} />;
  }
}
