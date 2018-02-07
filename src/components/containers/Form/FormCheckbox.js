/* eslint-disable jsx-a11y/label-has-for */
// TODO: Make sure the icon thing works.
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { invoke } from 'lodash';
import { customPropTypes, getBaseRef, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
import FormLabel from './FormLabel';

export default class FormCheckbox extends React.Component {
  static displayName = 'FormCheckbox';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    label: PropTypes.oneOfType([
      ExtraPropTypes.elementType(FormLabel),
      ExtraPropTypes.elementType('label'),
      PropTypes.string,
      PropTypes.number,
    ]),
    margin: Margin.propTypes,
    success: PropTypes.bool,
    width: Width.propTypes,
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
      flex,
      label: labelElement,
      inverse,
      margin,
      success,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-checkbox',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    const Element = getElementType(FormCheckbox, as);
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

    if (React.isValidElement(labelElement)) {
      return React.cloneElement(labelElement, {
        children: (
          <Fragment>
            {checkboxInput}
            {labelElement.props.children}
          </Fragment>
        ),
      });
    }

    return (
      <label>
        {checkboxInput}
        {labelElement}
      </label>
    );
  }
}
