import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Inline } from '../Base';

export default class LightboxItem extends Inline {
  static meta = {
    name: 'Lightbox',
  };

  static propTypes = {
    ...Inline.propTypes,
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      divider,
      pill,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      {
        [buildClassName('subnav', 'divider')]: (divider),
        [buildClassName('subnav', 'pill')]: (pill),
      },
    );

    return (
      <a
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        data-lightbox
        {...attributes}
      >
        {children}
      </a>
    );
  }
}
