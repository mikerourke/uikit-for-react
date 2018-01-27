import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class NavbarToggle extends React.Component {
  static displayName = 'NavbarToggle';

  static propTypes = {
    ...InlineElement.propTypes,
    className: PropTypes.string,
    iconOptions: PropTypes.shape(InlineElement.propTypes),
    title: PropTypes.node,
    titleOptions: PropTypes.shape(InlineElement.propTypes),
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
    iconOptions: null,
    title: null,
    titleOptions: {},
  };

  render() {
    const { className, iconOptions, title, titleOptions, ...rest } = this.props;
    const ukClass = 'uk-navbar-toggle';
    const classes = classnames(className, ukClass);
    if (!isNil(title)) {
      return (
        <InlineElement
          {...rest}
          as="a"
          className={classes}
          data-uk-navbar-toggle-icon
        />
      );
    }
    return (
      <InlineElement {...rest} as="a" className={classes}>
        <InlineElement {...iconOptions} as="span" data-uk-navbar-toggle-icon />
        <InlineElement {...titleOptions} as="span">
          {title}
        </InlineElement>
      </InlineElement>
    );
  }
}
