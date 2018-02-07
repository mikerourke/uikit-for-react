import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
import { Close } from '../../elements';

export default class ModalClose extends React.Component {
  static displayName = 'ModalClose';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a', 'button'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    full: PropTypes.bool,
    inverse: Inverse.propTypes,
    large: PropTypes.bool,
    margin: Margin.propTypes,
    outside: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'button',
    className: '',
    full: false,
    large: false,
    outside: false,
  };

  render() {
    const {
      as,
      className,
      flex,
      full,
      large,
      inverse,
      margin,
      outside,
      width,
      ...rest
    } = this.props;

    const isClose = isString(as) || as instanceof Close;
    let classes = classnames(
      className,
      'uk-modal-close',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    if (isClose) {
      classes = classnames(classes, {
        'uk-close-large': large,
        'uk-modal-close-default': !outside && !full && !large,
        'uk-modal-close-full': full,
        'uk-modal-close-outside': outside,
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
