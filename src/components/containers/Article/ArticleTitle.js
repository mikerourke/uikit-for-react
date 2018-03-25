import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class ArticleTitle extends React.Component {
  static displayName = 'ArticleTitle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'h1',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article-title');
    return <Base {...rest} className={classes} component={ArticleTitle} />;
  }
}
