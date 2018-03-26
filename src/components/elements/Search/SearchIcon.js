import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class SearchIcon extends React.Component {
  static displayName = 'SearchIcon';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button', 'span'),
    flip: PropTypes.bool,
    onClick: PropTypes.func,
    toggle: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
    flip: false,
    toggle: false,
  };

  handleClick = e => {
    invoke(this.props, 'onClick', e, this.props);
  };

  render() {
    const { className, flip, toggle, ...rest } = this.props;

    const classes = classnames(className, 'uk-search-icon', {
      'uk-search-icon-flip': flip,
      'uk-search-icon-toggle': toggle,
    });

    return (
      <Base
        {...rest}
        className={classes}
        component={SearchIcon}
        onClick={this.handleClick}
        uk-search-icon=""
      />
    );
  }
}
