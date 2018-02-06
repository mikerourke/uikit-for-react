/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import ThumbNavImage from './ThumbNavImage';

export default class ThumbNavItem extends React.Component {
  static displayName = 'ThumbNavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: customPropTypes.restrictToChildTypes(ThumbNavImage),
    className: PropTypes.string,
    slideshowItem: PropTypes.number,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
  };

  render() {
    const {
      active,
      as,
      children,
      className,
      slideshowItem,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

    const Element = getElementType(ThumbNavItem, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        data-uk-slideshow-item={
          isNil(slideshowItem) ? undefined : slideshowItem
        }
      >
        <a href="#">{children}</a>
      </Element>
    );
  }
}
