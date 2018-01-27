import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';

export default class ArticleMeta extends React.Component {
  static displayName = 'ArticleMeta';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article-meta');
    return <BlockElement {...rest} as="p" className={classes} />;
  }
}
