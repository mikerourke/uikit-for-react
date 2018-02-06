import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class FormRange extends React.Component {
  static displayName = 'FormRange';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    success: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'input',
    blank: false,
    className: '',
    danger: false,
    success: false,
  };

  render() {
    const {
      as,
      blank,
      className,
      danger,
      flex,
      margin,
      success,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-range',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    const Element = getElementType(FormRange, as);
    return <Element {...rest} type="range" className={classes} />;
  }
}
