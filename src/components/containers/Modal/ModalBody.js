import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';

export default class ModalBody extends React.Component {
  static displayName = 'ModalBody';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-body');
    return <BlockElement {...rest} className={classes} />;
  }
}
