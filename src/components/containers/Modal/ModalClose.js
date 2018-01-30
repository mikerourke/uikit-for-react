import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class ModalClose extends React.Component {
  static displayName = 'ModalClose';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOfType([PropTypes.oneOf(['a', 'button'])]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'div',
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-close');
    return <InlineElement {...rest} className={classes} />;
  }
}
