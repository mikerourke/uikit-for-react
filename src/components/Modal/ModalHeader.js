import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
} from '../../lib';

class ModalHeader extends React.Component {
  static meta = {
    name: 'ModalHeader',
    ukClass: 'uk-modal-header',
  };

  static propTypes = {
    as: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      ModalHeader.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const Element = getElementType(ModalHeader, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default ModalHeader;
