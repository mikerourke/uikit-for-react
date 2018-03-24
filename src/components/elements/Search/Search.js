import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';

export default class Search extends React.Component {
  static displayName = 'Search';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('form'),
    children: customPropTypes.restrictToChildTypes(SearchIcon, SearchInput),
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
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'form',
    large: false,
  };

  static Icon = SearchIcon;
  static Input = SearchInput;

  render() {
    const { children, className, icon, input, large, ...rest } = this.props;

    const classes = classnames(className, 'uk-search', {
      'uk-search-default': !large,
      'uk-search-large': large,
    });

    return (
      <Base {...rest} className={classes} component={Search}>
        {icon && icon}
        {input && input}
        {children && children}
      </Base>
    );
  }
}
