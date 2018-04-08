/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import { customPropTypes, LibraryComponent } from '../../lib';
import Base from '../Base';
import FormLabel from './FormLabel';

export default class FormRadio extends React.Component {
  static displayName = 'FormRadio';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('input'),
    children: ExtraPropTypes.restrictedProp(),
    blank: PropTypes.bool,
    danger: PropTypes.bool,
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
    this.libComp = new LibraryComponent('radio');
    this.radio = null;
  }

  componentDidMount() {
    this.radio = this.libComp.domNode;
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

  render() {
    const {
      blank,
      className,
      danger,
      label: labelElement,
      success,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-radio', {
      'uk-form-blank': blank,
      'uk-form-danger': danger,
      'uk-form-success': success,
    });

    const RadioInput = (
      <Base
        {...rest}
        className={classes}
        component={FormRadio}
        onChange={this.handleChange}
        onClick={this.handleClick}
        type="radio"
        {...this.libComp.appendProps(this.props)}
      />
    );

    if (React.isValidElement(labelElement)) {
      return React.cloneElement(labelElement, {
        children: (
          <Fragment>
            {RadioInput}
            {labelElement.props.children}
          </Fragment>
        ),
      });
    }

    return (
      <label>
        {RadioInput}
        {labelElement}
      </label>
    );
  }
}
