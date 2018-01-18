import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';
import { Inline } from '../Base';

export default class Close extends Inline {
  static meta = {
    name: 'Close',
    ukClass: 'uk-close',
  };

  static propTypes = {
    ...Inline.propTypes,
    as: PropTypes.oneOf(['a', 'button']),
    className: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    large: false,
  };

  render() {
    const {
      attributes,
      inlineClasses,
      inlineStyle,
      unhandledProps,
    } = this.getInlineElements(this.props);

    const {
      as,
      className,
      large,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inlineClasses,
      Close.meta.ukClass,
      {
        [buildClassName(Close.meta.ukClass, 'large')]: (large),
      },
    );

    const Element = getElementType(Close, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inlineStyle}
        data-uk-close
        {...attributes}
      />
    );
  }
}
