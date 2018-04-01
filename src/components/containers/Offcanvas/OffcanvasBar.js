import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class OffcanvasBar extends React.Component {
  static displayName = 'OffcanvasBar';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-offcanvas-bar');

    return <Base {...rest} className={classes} component={OffcanvasBar} />;
  }
}
