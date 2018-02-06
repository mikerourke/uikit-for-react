import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Margin, Width } from '../../common';

export default class Label extends React.Component {
  static displayName = 'Label';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    className: PropTypes.string,
    danger: PropTypes.bool,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
    danger: false,
    success: false,
    warning: false,
  };

  render() {
    const {
      align,
      as,
      className,
      danger,
      flex,
      margin,
      success,
      warning,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-label',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-label-danger': danger,
        'uk-label-success': success,
        'uk-label-warning': warning,
      },
    );

    const Element = getElementType(Label, as);
    return <Element {...rest} className={classes} />;
  }
}
