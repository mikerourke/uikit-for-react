/* eslint-disable jsx-a11y/label-has-for */
// TODO: Make sure the icon thing works.
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import { customPropTypes, getBaseRef } from '../../../lib';
import FormLabel from './FormLabel';
import Base from '../../base';

export default class FormCheckbox extends React.Component {
  static displayName = 'FormCheckbox';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    checked: PropTypes.bool,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    label: PropTypes.oneOfType([
      ExtraPropTypes.elementType(FormLabel),
      ExtraPropTypes.elementType('label'),
      PropTypes.string,
      PropTypes.number,
    ]),
    success: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'input',
    blank: false,
    danger: false,
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
      blank,
      className,
      danger,
      label: labelElement,
      success,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-checkbox', {
      'uk-form-blank': blank,
      'uk-form-danger': danger,
      'uk-form-success': success,
    });

    const CheckboxInput = (
      <Base
        {...rest}
        className={classes}
        onChange={this.handleChange}
        onClick={this.handleClick}
        baseRef={this.handleRef}
        type="checkbox"
      />
    );

    if (React.isValidElement(labelElement)) {
      return React.cloneElement(labelElement, {
        children: (
          <Fragment>
            {CheckboxInput}
            {labelElement.props.children}
          </Fragment>
        ),
      });
    }

    return (
      <label>
        {CheckboxInput}
        {labelElement}
      </label>
    );
  }
}
