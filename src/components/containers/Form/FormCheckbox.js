/* eslint-disable jsx-a11y/label-has-for */
// TODO: Make sure the icon thing works.
import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib/index';
import { InlineElement } from '../../base/index';
import FormLabel from './FormLabel';

export default class FormCheckbox extends React.Component {
  static displayName = 'FormCheckbox';

  static propTypes = {
    ...InlineElement.propTypes,
    blank: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.oneOfType([
      CustomPropTypes.elementType(FormLabel),
      CustomPropTypes.elementType('label'),
      PropTypes.string,
      PropTypes.number,
    ]),
    danger: PropTypes.bool,
    success: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    blank: false,
    className: null,
    danger: false,
    label: '',
    success: false,
  };

  render() {
    const {
      blank,
      className,
      danger,
      label: Label,
      success,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-checkbox', {
      [buildClassName('form', 'blank')]: blank,
      [buildClassName('form', 'danger')]: danger,
      [buildClassName('form', 'success')]: success,
    });

    const checkboxInput = (
      <InlineElement
        {...rest}
        as="input"
        type="checkbox"
        className={classes || undefined}
      />
    );

    if (React.isValidElement(Label)) {
      return (
        <Label>
          {checkboxInput}
          {Label.children}
        </Label>
      );
    }

    return (
      <label>
        {checkboxInput}
        {Label}
      </label>
    );
  }
}
