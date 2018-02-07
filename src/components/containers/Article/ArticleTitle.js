import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class ArticleTitle extends React.Component {
  static displayName = 'ArticleTitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'h1',
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
      'uk-article-title',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const Element = getElementType(ArticleTitle, as);
    return <Element {...rest} className={classes} />;
  }
}
