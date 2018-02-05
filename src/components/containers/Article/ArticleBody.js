import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Margin } from '../../common';

/**
 * Contents/body of the Article.
 * @see https://getuikit.com/docs/article
 */
export default class ArticleBody extends React.Component {
  static displayName = 'ArticleBody';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    margin: Margin.propTypes,
  };

  static defaultProps = {
    as: 'p',
    className: '',
  };

  render() {
    const { as, className, margin, ...rest } = this.props;
    const classes = classnames(className, Margin.getClasses(margin));
    const Element = getElementType(ArticleBody, this.props);
    return <Element {...rest} className={classes || undefined} />;
  }
}
