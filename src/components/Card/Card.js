import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getIfHasChildType,
  restrictToChildTypes,
} from '../../lib';
import { Block } from '../Base';
import CardBody from './CardBody';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardTitle from './CardTitle';

export default class Card extends Block {
  static meta = {
    name: 'Card',
    ukClass: 'uk-card',
  };

  static propTypes = {
    ...Block.propTypes,
    children: restrictToChildTypes([
      CardBody,
      CardContent,
      CardFooter,
      CardHeader,
      CardMedia,
      CardTitle,
    ]),
    className: PropTypes.string,
    hover: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    primary: false,
    secondary: false,
  };

  static Body = CardBody;
  static Content = CardContent;
  static Footer = CardFooter;
  static Header = CardHeader;
  static Media = CardMedia;
  static Title = CardTitle;

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
      hover,
      primary,
      secondary,
      size,
      ...rest
    } = unhandledProps;

    const hasBody = (getIfHasChildType(children, CardBody));
    const hasContent = (getIfHasChildType(children, CardContent));
    if (hasContent && hasBody) {
      throw new Error('You cannot specify CardContent and CardBody as children, it must be one or the other.');
    }

    const classes = classnames(
      className,
      blockClasses,
      Card.meta.ukClass,
      buildClassName('card', size),
      {
        [buildClassName(Card.meta.ukClass, 'default')]: (!primary && !secondary),
        [buildClassName(Card.meta.ukClass, 'body')]: (!hasBody),
        [buildClassName(Card.meta.ukClass, 'hover')]: (hover),
        [buildClassName(Card.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Card.meta.ukClass, 'secondary')]: (secondary),
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}
