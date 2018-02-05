import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';
import ThumbNavItem from './ThumbNavItem';

export default class ThumbNav extends React.Component {
  static displayName = 'ThumbNav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: customPropTypes.restrictToChildTypes(ThumbNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
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
