import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getElementType } from '../../lib';
import { InlineElement } from '../Base';

export default class Close extends InlineElement {
  static meta = {
    name: 'Close',
    ukClass: 'uk-close',
  };

  static propTypes = {
    ...InlineElement.propTypes,
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
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { as, className, large, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Close.meta.ukClass,
      {
        [buildClassName(Close.meta.ukClass, 'large')]: large,
      },
    );

    const Element = getElementType(Close, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        data-uk-close
        {...inheritedAttributes}
      />
    );
  }
}
