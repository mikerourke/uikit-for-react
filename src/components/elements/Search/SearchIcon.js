import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke, noop } from 'lodash';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class SearchIcon extends React.Component {
  static displayName = 'SearchIcon';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a', 'button', 'span'),
    className: PropTypes.string,
    flip: PropTypes.bool,
    onClick: PropTypes.func,
    toggle: PropTypes.bool,
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
    const { as, className, flip, toggle, ...rest } = this.props;

    const ukClass = 'uk-search-icon';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'flip')]: flip,
      [buildClassName(ukClass, 'toggle')]: toggle,
    });

    const Element = getElementType(SearchIcon, this.props);
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
