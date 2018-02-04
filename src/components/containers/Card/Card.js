import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, hasChildType } from '../../../lib';
import { BlockElement } from '../../base';
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
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: ExtraPropTypes.and([
      PropTypes.node.isRequired,
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
    ...BlockElement.defaultProps,
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
      children,
      className,
      hover,
      primary,
      secondary,
      simple,
      size,
      ...rest
    } = this.props;

    const ukClass = 'uk-card';
    const classes = classnames(
      className,
      ukClass,
      buildClassName('card', size),
      {
        [buildClassName(ukClass, 'default')]: !primary && !secondary && !simple,
        [buildClassName(ukClass, 'body')]: !hasChildType(children, CardBody),
        [buildClassName(ukClass, 'hover')]: hover,
        [buildClassName(ukClass, 'primary')]: primary,
        [buildClassName(ukClass, 'secondary')]: secondary,
      },
    );

    return (
      <BlockElement {...rest} className={classes}>
        {children}
      </BlockElement>
    );
  }
}
