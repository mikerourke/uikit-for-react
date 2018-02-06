import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  hasChildType,
} from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import CardBadge from './CardBadge';
import CardBody from './CardBody';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardTitle from './CardTitle';

export default class Card extends React.Component {
  static displayName = 'Card';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: ExtraPropTypes.and([
      PropTypes.node,
      props => {
        if (
          hasChildType(props.children, CardBody) &&
          hasChildType(props.children, CardContent)
        ) {
          return new Error(
            'You cannot specify CardContent and CardBody as children, it must be one or the other.',
          );
        }
        return null;
      },
    ]),
    className: PropTypes.string,
    flex: Flex.propTypes,
    hover: PropTypes.bool,
    margin: Margin.propTypes,
    primary: ExtraPropTypes.mutuallyExclusiveTrueProps(
      'primary',
      'secondary',
      'simple',
    ),
    secondary: PropTypes.bool,
    simple: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    hover: false,
    primary: false,
    secondary: false,
    simple: false,
  };

  static Badge = CardBadge;
  static Body = CardBody;
  static Content = CardContent;
  static Footer = CardFooter;
  static Header = CardHeader;
  static Media = CardMedia;
  static Title = CardTitle;

  render() {
    const {
      as,
      children,
      className,
      flex,
      hover,
      margin,
      primary,
      secondary,
      simple,
      size,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-card',
      buildClassName('card', size),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-card-default': !primary && !secondary && !simple,
        'uk-card-body': !hasChildType(children, CardBody),
        'uk-card-hover': hover,
        'uk-card-primary': primary,
        'uk-card-secondary': secondary,
      },
    );

    const Element = getElementType(Card, as);
    return (
      <Element {...rest} className={classes}>
        {children}
      </Element>
    );
  }
}
