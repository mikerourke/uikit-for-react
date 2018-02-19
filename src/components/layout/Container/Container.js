import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  childrenHaveClass,
  customPropTypes,
  getElementType,
  HTML,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class Container extends React.Component {
  static displayName = 'Container';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    size: PropTypes.oneOf(['expand', 'large', 'small']),
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      flex,
      inverse,
      margin,
      size,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-container',
      buildClassName('container', size),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-inline': childrenHaveClass(children, 'position'),
      },
    );

    const Element = getElementType(Container, as);
    return (
      <Element {...rest} className={classes}>
        {children}
      </Element>
    );
  }
}
