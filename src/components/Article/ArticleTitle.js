import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { BlockElement } from '../Base';

export default class ArticleTitle extends BlockElement {
  static displayName = 'ArticleTitle';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'h1',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article-title');
    return <BlockElement {...rest} className={classes || undefined} />;
  }
}
