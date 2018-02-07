import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Inverse, Margin, Width } from '../../common';

export default class Badge extends React.Component {
  static displayName = 'Badge';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a', 'span'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      inverse,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-badge',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(Badge, as);
    return <Element {...rest} className={classes} />;
  }
}
