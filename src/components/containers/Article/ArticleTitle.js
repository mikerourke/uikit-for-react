import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Margin, Text } from '../../common';

export default class ArticleTitle extends React.Component {
  static displayName = 'ArticleTitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    margin: Margin.propTypes,
    text: Text.propTypes,
  };

  static defaultProps = {
    as: 'h1',
    className: '',
  };

  render() {
    const { as, className, margin, text, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-article-title',
      Margin.getClasses(margin),
      Text.getClasses(text),
    );

    const Element = getElementType(ArticleTitle, this.props);
    return <Element {...rest} className={classes} />;
  }
}
