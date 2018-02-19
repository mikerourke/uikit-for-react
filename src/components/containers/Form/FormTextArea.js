import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  UIK,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class FormTextArea extends React.Component {
  static displayName = 'FormTextArea';

  static propTypes = {
    as: customPropTypes.customOrStringElement('textarea'),
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    flex: Flex.propTypes,
    formWidth: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.oneOf(UIK.FORM_WIDTHS),
      'formWidth',
      'width',
    ),
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'textarea',
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
      formWidth,
      inverse,
      margin,
      size,
      success,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-textarea',
      buildClassName('form', size),
      buildClassName('form', 'width', formWidth),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    const Element = getElementType(FormTextArea, as);
    return <Element {...rest} className={classes} />;
  }
}
