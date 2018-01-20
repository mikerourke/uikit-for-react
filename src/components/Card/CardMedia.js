import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';

class CardMedia extends BlockElement {
  static meta = {
    name: 'CardMedia',
    ukClass: 'uk-card-media',
  };

  static propTypes = {
    alignTo: PropTypes.oneOf(UIK.LOCATIONS),
    className: PropTypes.string,
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
  };

  static defaultProps = {
    imgAlt: '',
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      alignTo,
      className,
      imgAlt,
      imgSrc,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      CardMedia.meta.ukClass,
      buildClassName(CardMedia.meta.ukClass, alignTo),
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
    );
  }
}

export default CardMedia;
