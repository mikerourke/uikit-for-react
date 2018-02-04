import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class ArticleMeta extends React.Component {
  static displayName = 'ArticleMeta';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('p'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'p',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article-meta');
    return <BlockElement {...rest} className={classes} />;
  }
}
