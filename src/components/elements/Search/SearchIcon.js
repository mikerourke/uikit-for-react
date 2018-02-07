import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke, noop } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Inverse, Margin, Text, Width } from '../../common';

export default class SearchIcon extends React.Component {
  static displayName = 'SearchIcon';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button', 'span'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    flip: PropTypes.bool,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    onClick: PropTypes.func,
    toggle: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
    flip: false,
    onClick: noop,
    toggle: false,
  };

  handleClick = e => {
    invoke(this.props, 'onClick', e, this.props);
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      flip,
      inverse,
      margin,
      toggle,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-search-icon',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-search-icon-flip': flip,
        'uk-search-icon-toggle': toggle,
      },
    );

    const Element = getElementType(SearchIcon, as);
    return (
      <Element
        {...rest}
        className={classes}
        onClick={this.handleClick}
        data-uk-search-icon=""
      />
    );
  }
}
