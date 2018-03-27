import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, hasChildType } from '../../../lib';
import Base from '../../base';
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
            'You cannot specify CardContent and CardBody as children, ' +
            'it must be one or the other.',
          );
        }
        return null;
      },
    ]),
    hover: PropTypes.bool,
    primary: ExtraPropTypes.mutuallyExclusiveTrueProps(
      'primary',
      'secondary',
      'simple',
    ),
    secondary: PropTypes.bool,
    simple: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    as: 'div',
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
      children,
      className,
      hover,
      primary,
      secondary,
      simple,
      size,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-card',
      buildClassName('card', size),
      {
        'uk-card-default': !primary && !secondary && !simple,
        'uk-card-body': !hasChildType(children, CardBody),
        'uk-card-hover': hover,
        'uk-card-primary': primary,
        'uk-card-secondary': secondary,
      },
    );

    return (
      <Base {...rest} component={Card} className={classes}>
        {children}
      </Base>
    );
  }
}
