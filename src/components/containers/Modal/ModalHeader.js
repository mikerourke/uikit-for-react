import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class ModalHeader extends React.Component {
  static displayName = 'ModalHeader';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-header');
    const Element = getElementType(ModalHeader, as);
    return <Element {...rest} className={classes} />;
  }
}
