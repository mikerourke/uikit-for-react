import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { buildClassName } from '../../../lib';
import { BlockElement, InlineElement } from '../../base';
import SearchIcon from './SearchIcon';

export default class Search extends React.Component {
  static displayName = 'Search';

  static propTypes = {
    ...BlockElement.propTypes,
    autofocus: PropTypes.bool,
    className: PropTypes.string,
    icon: CustomPropTypes.elementType(SearchIcon),
    inputOptions: PropTypes.shape(InlineElement.propTypes),
    large: PropTypes.bool,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    autofocus: false,
    className: null,
    icon: null,
    inputOptions: null,
    large: false,
    placeholder: 'Search...',
  };

  static Icon = SearchIcon;

  render() {
    const {
      autofocus,
      className,
      icon,
      inputOptions,
      large,
      placeholder,
      ...rest
    } = this.props;

    const ukClass = 'uk-search';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'default')]: !large,
      [buildClassName(ukClass, 'large')]: large,
    });

    const inputProps = {
      ...inputOptions,
      autofocus,
      placeholder,
      className: classnames(get(inputOptions, 'className'), 'uk-search-input'),
    };

    return (
      <BlockElement {...rest} as="form" className={classes}>
        {icon && icon}
        <InlineElement {...inputProps} as="input" type="search" />
      </BlockElement>
    );
  }
}
