import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';

export default class Search extends React.Component {
  static displayName = 'Search';

  static propTypes = {
    as: customPropTypes.customOrStringElement('form'),
    children: customPropTypes.restrictToChildTypes(SearchIcon, SearchInput),
    className: PropTypes.string,
    flex: Flex.propTypes,
    icon: ExtraPropTypes.mutuallyExclusiveProps(
      ExtraPropTypes.elementType(SearchIcon),
      'icon',
      'children',
    ),
    input: ExtraPropTypes.mutuallyExclusiveProps(
      ExtraPropTypes.elementType(SearchInput),
      'input',
      'children',
    ),
    large: PropTypes.bool,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'form',
    className: '',
    large: false,
  };

  static Icon = SearchIcon;
  static Input = SearchInput;

  render() {
    const {
      as,
      children,
      className,
      flex,
      icon,
      input,
      large,
      inverse,
      margin,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-search',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-search-default': !large,
        'uk-search-large': large,
      },
    );

    const Element = getElementType(Search, as);
    return (
      <Element {...rest} className={classes}>
        {icon && icon}
        {input && input}
        {children && children}
      </Element>
    );
  }
}
