/* eslint-disable jsx-a11y/label-has-for */
// TODO: Make sure the icon thing works.
import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { invoke } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getBaseRef,
  getElementType,
} from '../../../lib';
import FormLabel from './FormLabel';

export default class FormCheckbox extends React.Component {
  static displayName = 'FormCheckbox';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.oneOfType([
      ExtraPropTypes.elementType(FormLabel),
      ExtraPropTypes.elementType('label'),
      PropTypes.string,
      PropTypes.number,
    ]),
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    success: PropTypes.bool,
  };

  static defaultProps = {
    as: 'input',
    blank: false,
    checked: false,
    className: '',
    danger: false,
    defaultChecked: false,
    label: '',
    success: false,
  };

  componentDidMount() {
    if (!this.props.checked && this.props.defaultChecked) {
      if (this.ref) this.ref.checked = true;
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  handleChange = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    invoke(this.props, 'onChange', e, this.props);
  };

  handleClick = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    invoke(this.props, 'onClick', e, this.props);
  };

  render() {
    const {
      as,
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

    const Element = getElementType(FormCheckbox, this.props);
    const checkboxInput = (
      <Element
        {...rest}
        className={classes}
        onChange={this.handleChange}
        onClick={this.handleClick}
        ref={this.handleRef}
        type="checkbox"
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
