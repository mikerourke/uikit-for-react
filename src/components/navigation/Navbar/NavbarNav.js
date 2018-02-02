import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class NavbarNav extends React.Component {
  static displayName = 'NavbarNav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
    splitSide: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-navbar-nav');
    return <BlockElement {...rest} as="ul" className={classes} />;
  }
}
