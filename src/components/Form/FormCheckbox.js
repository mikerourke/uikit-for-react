/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import FormLabel from './FormLabel';

export default class FormCheckbox extends React.Component {
  static displayName = 'FormCheckbox';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    children: ExtraPropTypes.restrictedProp(),
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
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

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    if (!this.props.checked && this.props.defaultChecked) {
      this.ref.setAttribute('checked', true);
    }
  }

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

  handleRef = element => (this.ref = element);

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
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          className={classes}
          component={FormCheckbox}
          onChange={this.handleChange}
          onClick={this.handleClick}
          type="checkbox"
        />
      </Ref>
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
