import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { BlockElement } from '../Base';

export default class ArticleTitle extends React.Component {
  static displayName = 'ArticleTitle';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'h1',
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article-title');
    return <BlockElement {...rest} className={classes || undefined} />;
  }
}
