import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { InlineElement } from '../Base';

export default class LightboxItem extends InlineElement {
  static meta = {
    name: 'Lightbox',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['a']),
      PropTypes.element,
      PropTypes.func,
    ]),
    caption: PropTypes.string,
    className: PropTypes.string,
    poster: PropTypes.string,
    source: PropTypes.string,
    type: PropTypes.oneOf(['iframe', 'image', 'video']),
  };

  static defaultProps = {
    as: 'a',
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      divider,
      pill,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      {
        [buildClassName('subnav', 'divider')]: (divider),
        [buildClassName('subnav', 'pill')]: (pill),
      },
    );

    return (
      <a
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        data-lightbox
        {...inheritedAttributes}
      >
        {children}
      </a>
    );
  }
}
