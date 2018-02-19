import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class SwitcherContent extends React.Component {
  static displayName = 'SwitcherContent';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
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
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-switcher',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const Element = getElementType(SwitcherContent, as);
    return <Element {...rest} className={classes} />;
  }
}
