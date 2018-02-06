import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class ModalFooter extends React.Component {
  static displayName = 'ModalFooter';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-footer');
    const Element = getElementType(ModalFooter, as);
    return <Element {...rest} as="div" className={classes} />;
  }
}
