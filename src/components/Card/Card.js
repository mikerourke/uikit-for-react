import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  childrenUtils,
  commonPropTypes,
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

    hover: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    primary: PropTypes.bool,

    secondary: PropTypes.bool,

    size: PropTypes.oneOf(['small', 'large']),

    width: commonPropTypes.width,
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

    const classes = classnames(
      className,
      Card.meta.ukClass,
      buildClassName('card', 'hover', hover),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName('card', 'primary', primary),
      buildClassName('card', 'secondary', secondary),
      buildClassName('card', size),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName('card', 'default')]: (isNil(primary) && isNil(secondary)),
        [buildClassName('card', 'body')]: (!childrenUtils.hasChildType(children, CardBody)),
      },
    );

    return (
      <div
        {...rest}
        className={classes}
      >
        {children}
      </div>
    );
  }
}

export default Card;
