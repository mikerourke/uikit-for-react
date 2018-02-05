import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Margin } from '../../common';

export default class ArticleMeta extends React.Component {
  static displayName = 'ArticleMeta';

  static propTypes = {
    as: customPropTypes.customOrStringElement('p'),
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

    const classes = classnames(
      className,
      'uk-article-meta',
      Margin.getClasses(margin),
    );

    const Element = getElementType(ArticleMeta, this.props);
    return <Element {...rest} className={classes} />;
  }
}
