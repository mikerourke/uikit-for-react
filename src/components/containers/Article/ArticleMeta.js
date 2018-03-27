import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class ArticleMeta extends React.Component {
  static displayName = 'ArticleMeta';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('p'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'p',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article-meta');
    return <Base {...rest} className={classes} component={ArticleMeta} />;
  }
}
