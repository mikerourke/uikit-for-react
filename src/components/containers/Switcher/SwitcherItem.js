import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class SwitcherItem extends React.Component {
  static displayName = 'SwitcherItem';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-switcher-item',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const Element = getElementType(SwitcherItem, as);
    return <Element {...rest} className={classes} />;
  }
}
