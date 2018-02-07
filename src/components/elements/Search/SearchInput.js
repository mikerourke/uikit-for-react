import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class SearchInput extends React.Component {
  static displayName = 'SearchInput';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    autofocus: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    placeholder: PropTypes.string,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'input',
    autofocus: false,
    className: '',
    placeholder: 'Search...',
  };

  render() {
    const { as, className, flex, inverse, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-search-input',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(SearchInput, as);
    return <Element {...rest} type="search" className={classes} />;
  }
}
