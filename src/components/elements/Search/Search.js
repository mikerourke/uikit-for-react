import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';

export default class Search extends React.Component {
  static displayName = 'Search';

  static propTypes = {
    as: customPropTypes.customOrStringElement('form'),
    children: customPropTypes.restrictToChildTypes(SearchIcon, SearchInput),
    className: PropTypes.string,
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
    as: 'form',
    className: '',
    large: false,
  };

  static Icon = SearchIcon;
  static Input = SearchInput;

  render() {
    const { as, children, className, icon, input, large, ...rest } = this.props;

    const ukClass = 'uk-search';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'default')]: !large,
      [buildClassName(ukClass, 'large')]: large,
    });

    const Element = getElementType(Search, this.props);
    return (
      <Element {...rest} className={classes}>
        {icon && icon}
        {input && input}
        {children && children}
      </Element>
    );
  }
}
