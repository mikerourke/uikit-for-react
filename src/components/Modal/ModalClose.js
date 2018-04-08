import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isString from 'lodash/isString';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import Close from '../Close';

export default class ModalClose extends React.Component {
  static displayName = 'ModalClose';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    full: PropTypes.bool,
    large: PropTypes.bool,
    outside: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'button',
    full: false,
    large: false,
    outside: false,
  };

  render() {
    const { as, className, full, large, outside, ...rest } = this.props;

    const isClose = isString(as) || as instanceof Close;
    let classes = classnames(className, {
      'uk-modal-close': !outside,
    });

    if (isClose) {
      classes = classnames(classes, {
        'uk-close-large': large,
        'uk-modal-close-default': !outside && !full && !large,
        'uk-modal-close-full': full,
        'uk-modal-close-outside': outside,
      });
    }

    return (
      <Base
        {...rest}
        as={as}
        className={classes}
        component={ModalClose}
        type="button"
        uk-close={isClose ? '' : undefined}
      />
    );
  }
}
