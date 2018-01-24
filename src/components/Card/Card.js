import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, getIfHasChildType } from '../../lib';
import { BlockElement } from '../Base';
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
    children: CustomPropTypes.and([
      PropTypes.node.isRequired,
      props => {
        if (
          getIfHasChildType(props.children, CardBody) &&
          getIfHasChildType(props.children, CardContent)
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
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    hover: false,
    primary: false,
    secondary: false,
    size: null,
  };

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
      size,
      ...rest
    } = this.props;

    const ukClass = 'uk-card';
    const classes = classnames(
      className,
      ukClass,
      buildClassName('card', size),
      {
        [buildClassName(ukClass, 'default')]: !primary && !secondary,
        [buildClassName(ukClass, 'body')]: !getIfHasChildType(
          children,
          CardBody,
        ),
        [buildClassName(ukClass, 'hover')]: hover,
        [buildClassName(ukClass, 'primary')]: primary,
        [buildClassName(ukClass, 'secondary')]: secondary,
      },
    );

    return <BlockElement {...rest} as="div" className={classes || undefined} />;
  }
}
