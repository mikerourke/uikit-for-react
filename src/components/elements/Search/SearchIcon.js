import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke } from 'lodash';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class SearchIcon extends React.Component {
  static displayName = 'SearchIcon';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'button', 'span']),
    className: PropTypes.string,
    flip: PropTypes.bool,
    onClick: PropTypes.func,
    toggle: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'span',
    className: null,
    flip: false,
    href: null,
    onClick: null,
    toggle: false,
  };

  handleClick = e => {
    invoke(this.props, 'onClick', e, this.props);
  };

  render() {
    const { className, flip, toggle, ...rest } = this.props;

    const ukClass = 'uk-search-icon';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'flip')]: flip,
      [buildClassName(ukClass, 'toggle')]: toggle,
    });

    return (
      <InlineElement
        {...rest}
        className={classes}
        onClick={this.handleClick}
        data-uk-search-icon
      />
    );
  }
}
