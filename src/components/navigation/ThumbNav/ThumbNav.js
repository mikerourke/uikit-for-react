import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import ThumbNavItem from './ThumbNavItem';

export default class ThumbNav extends React.Component {
  static displayName = 'ThumbNav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: CustomPropTypes.childrenOfType(ThumbNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    vertical: false,
  };

  static Item = ThumbNavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const ukClass = 'uk-thumbnav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'vertical')]: vertical,
    });

    return <BlockElement {...rest} as="ul" className={classes} />;
  }
}
