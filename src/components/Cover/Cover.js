import React from 'react';
import PropTypes from 'prop-types';
import { getOptionsString } from '../../lib';
import { BlockElement } from '../Base';
import CoverContainer from './CoverContainer';

export default class Cover extends BlockElement {
  static displayName = 'Cover';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(['img', 'video', 'iframe']),
    automute: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'img',
    automute: false,
    className: null,
    height: null,
    width: null,
  };

  static Container = CoverContainer;

  render() {
    const {
      automute,
      children,
      className,
      height,
      width,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      automute,
      height,
      width,
    });

    return (
      <BlockElement
        {...rest}
        className={className || undefined}
        data-uk-cover={componentOptions}
      >
        {children}
      </BlockElement>
    );
  }
}
