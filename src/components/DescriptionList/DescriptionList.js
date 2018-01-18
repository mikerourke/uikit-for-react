import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  restrictToChildTypes,
} from '../../lib';
import { Block } from '../Base';
import DescriptionDetails from './DescriptionDetails';
import DescriptionTerm from './DescriptionTerm';

export default class DescriptionList extends Block {
  static meta = {
    name: 'DescriptionList',
    ukClass: 'uk-description-list',
  };

  static propTypes = {
    ...Block.propTypes,
    children: restrictToChildTypes([
      DescriptionDetails,
      DescriptionTerm,
    ]),
    className: PropTypes.string,
    divider: PropTypes.bool,
  };

  static defaultProps = {
    divider: false,
  };

  static Details = DescriptionDetails;
  static Term = DescriptionTerm;

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      divider,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      DescriptionList.meta.ukClass,
      {
        [buildClassName(DescriptionList.meta.ukClass, 'divider')]: (divider),
      },
    );

    return (
      <dl
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </dl>
    );
  }
}
