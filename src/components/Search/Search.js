import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';

export default class Search extends React.Component {
  static displayName = 'Search';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('form'),
    children: customPropTypes.restrictToChildTypes(SearchIcon, SearchInput),
    iconOptions: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.shape(SearchIcon.propTypes),
      'icon',
      'children',
    ),
    inputOptions: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.shape(SearchInput.propTypes),
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
    const {
      children,
      className,
      iconOptions,
      inputOptions,
      large,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-search', {
      'uk-search-default': !large,
      'uk-search-large': large,
    });

    return (
      <Base {...rest} className={classes} component={Search}>
        {!isNil(iconOptions) && <SearchIcon {...iconOptions} />}
        {!isNil(inputOptions) && <SearchInput {...inputOptions} />}
        {!isNil(children) && children}
      </Base>
    );
  }
}
