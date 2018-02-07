import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class CommentTitle extends React.Component {
  static displayName = 'CommentTitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'h4',
    className: '',
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-comment-title',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const Element = getElementType(CommentTitle, as);
    return <Element {...rest} className={classes} />;
  }
}
