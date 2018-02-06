import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class ArticleMeta extends React.Component {
  static displayName = 'ArticleMeta';

  static propTypes = {
    as: customPropTypes.customOrStringElement('p'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'p',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-article-meta',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(ArticleMeta, as);
    return <Element {...rest} className={classes} />;
  }
}
