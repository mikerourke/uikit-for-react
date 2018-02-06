import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class SearchInput extends React.Component {
  static displayName = 'SearchInput';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    autofocus: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    as: 'input',
    autofocus: false,
    className: '',
    placeholder: 'Search...',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-search-input');
    const Element = getElementType(SearchInput, this.props);
    return <Element {...rest} type="search" className={classes} />;
  }
}
