import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Close } from '../../elements';

export default class ModalClose extends React.Component {
  static displayName = 'ModalClose';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a', 'button'),
    children: PropTypes.node,
    className: PropTypes.string,
    full: PropTypes.bool,
    large: PropTypes.bool,
    outside: PropTypes.bool,
  };

  static defaultProps = {
    as: 'button',
    className: '',
    full: false,
    large: false,
    outside: false,
  };

  render() {
    const { as, className, full, large, outside, ...rest } = this.props;

    const isClose = isString(as) || as instanceof Close;
    const ukClass = 'uk-modal-close';
    let classes = classnames(className, ukClass);
    if (isClose) {
      classes = classnames(classes, {
        [buildClassName('close', 'large')]: large,
        [buildClassName(ukClass, 'default')]: !outside && !full && !large,
        [buildClassName(ukClass, 'full')]: full,
        [buildClassName(ukClass, 'outside')]: outside,
      });
    }

    const Element = getElementType(ModalClose, as);
    return (
      <Element
        {...rest}
        className={classes}
        data-uk-close={isClose ? '' : undefined}
      />
    );
  }
}
