import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  childrenUtils,
  commonPropTypes,
  UIK,
} from '../../lib';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardTitle from './CardTitle';

class Card extends React.Component {
  static meta = {
    name: 'Card',
    ukClass: 'uk-card',
  };

  static propTypes = {
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Create a hover effect on the card. */
    hover: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Modify the card and emphasize it with a primary color. */
    primary: PropTypes.bool,

    /** Modify the card and give it a secondary background color. */
    secondary: PropTypes.bool,

    /** Apply a smaller or larger padding. */
    size: PropTypes.oneOf(['small', 'large']),

    /** Apply a width based on the size of the parent container. */
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
    ]),
  };

  static defaultProps = {
    className: '',
  };

  static Body = CardBody;
  static Footer = CardFooter;
  static Header = CardHeader;
  static Media = CardMedia;
  static Title = CardTitle;

  render() {
    const {
      children,
      className,
      hover,
      margin,
      padding,
      primary,
      secondary,
      size,
      width,
      ...rest
    } = this.props;

    const isBody = !childrenUtils.hasChildType(children, CardBody);

    const classes = classnames(
      className,
      Card.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName('card', size),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName(Card.meta.ukClass, 'default')]: (isNil(primary) && isNil(secondary)),
        [buildClassName(Card.meta.ukClass, 'body')]: (isBody),
        [buildClassName(Card.meta.ukClass, 'hover')]: (hover),
        [buildClassName(Card.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Card.meta.ukClass, 'secondary')]: (secondary),
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
      >
        {children}
      </div>
    );
  }
}

export default Card;
