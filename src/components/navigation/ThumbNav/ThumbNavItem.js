/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import ThumbNavImage from './ThumbNavImage';

export default class ThumbNavItem extends React.Component {
  static displayName = 'ThumbNavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: customPropTypes.restrictToChildTypes(ThumbNavImage),
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    slideshowItem: PropTypes.number,
    width: Width.propTypes,
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
      flex,
      margin,
      width,
      slideshowItem,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-active': active,
      },
    );

    const Element = getElementType(ThumbNavItem, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-slideshow-item={
          isNil(slideshowItem) ? undefined : slideshowItem
        }
      >
        <a href="#">{children}</a>
      </Element>
    );
  }
}
