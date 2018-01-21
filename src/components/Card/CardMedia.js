import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, UIK } from '../../lib';
import { BlockElement } from '../Base';

export default class CardMedia extends BlockElement {
  static meta = {
    name: 'CardMedia',
    ukClass: 'uk-card-media',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    alignTo: PropTypes.oneOf(UIK.LOCATIONS),
    className: PropTypes.string,
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
  };

  static defaultProps = {
    imgAlt: '',
  };

  render() {
    const { alignTo, className, imgAlt, imgSrc, ...rest } = this.props;

    const classes = classnames(
      className,
      CardMedia.meta.ukClass,
      buildClassName(CardMedia.meta.ukClass, alignTo),
    );

    return (
      <BlockElement {...rest} as="div" className={classes || undefined}>
        <img src={imgSrc} alt={imgAlt} />
      </BlockElement>
    );
  }
}
