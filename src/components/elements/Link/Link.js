import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isBoolean } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Inverse, Margin, Text, Width } from '../../common';

export default class Link extends React.Component {
  static displayName = 'Link';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    muted: PropTypes.bool,
    reset: PropTypes.bool,
    text: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape(Text.propShape),
    ]),
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    muted: false,
    reset: false,
    text: false,
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      inverse,
      margin,
      muted,
      reset,
      text,
      width,
      ...rest
    } = this.props;

    const textClasses = isBoolean(text) ? '' : Text.getClasses(text);
    const classes = classnames(
      className,
      'uk-link',
      textClasses,
      Align.getClasses(align),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-link-muted': muted,
        'uk-link-reset': reset,
        'uk-link-text': text === true,
      },
    );

    const Element = getElementType(Link, as);
    return <Element {...rest} className={classes} />;
  }
}
