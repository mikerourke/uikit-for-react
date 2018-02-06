import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class ModalTitle extends React.Component {
  static displayName = 'ModalTitle';

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
    const classes = classnames(className, 'uk-modal-title');
    const Element = getElementType(ModalTitle, as);
    return <Element {...rest} className={classes} />;
  }
}
