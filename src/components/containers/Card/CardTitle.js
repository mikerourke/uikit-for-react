import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class CardTitle extends React.Component {
  static displayName = 'CardTitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
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
    as: 'h3',
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
      'uk-card-title',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const Element = getElementType(CardTitle, as);
    return <Element {...rest} className={classes} />;
  }
}
