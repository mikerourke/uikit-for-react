import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class SearchInput extends React.Component {
  static displayName = 'SearchInput';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('input'),
    autofocus: PropTypes.bool,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'input',
    autofocus: false,
    placeholder: 'Search...',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-search-input');
    return (
      <Base
        {...rest}
        type="search"
        className={classes}
        component={SearchInput}
      />
    );
  }
}
