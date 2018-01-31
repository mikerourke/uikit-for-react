import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';
import { Close } from '../../elements';

export default class ModalClose extends React.Component {
  static displayName = 'ModalClose';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['a', 'button']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    full: PropTypes.bool,
    large: PropTypes.bool,
    outside: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
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

    return (
      <InlineElement
        {...rest}
        as={as}
        className={classes}
        data-uk-close={isClose || undefined}
      />
    );
  }
}
