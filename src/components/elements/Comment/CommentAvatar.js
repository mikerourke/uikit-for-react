import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Margin, Width } from '../../common';

export default class CommentAvatar extends React.Component {
  static displayName = 'CommentAvatar';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('img'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'img',
    className: '',
  };

  render() {
    const { align, as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-comment-avatar',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(CommentAvatar, as);
    return <Element {...rest} className={classes} />;
  }
}
