import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  hasChildType,
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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hover: PropTypes.bool,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
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

    const isBody = (!hasChildType(children, CardBody));

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
