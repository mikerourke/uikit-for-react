import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Inverse, Margin, Width } from '../../common';

export default class CommentAvatar extends React.Component {
  static displayName = 'CommentAvatar';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('img'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'img',
    className: '',
  };

  render() {
    const { align, as, className, flex, inverse, margin, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-comment-avatar',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(this.props.width),
    );

    const Element = getElementType(CommentAvatar, as);
    return <Element {...rest} className={classes} />;
  }
}
