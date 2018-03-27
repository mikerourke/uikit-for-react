// TODO: Finish this component.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class OffcanvasContent extends React.Component {
  static displayName = 'OffcanvasContent';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-offcanvas-content');
    return <Base {...rest} className={classes} component={OffcanvasContent} />;
  }
}
