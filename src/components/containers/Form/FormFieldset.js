import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class FormFieldset extends React.Component {
  static displayName = 'FormFieldset';

  static propTypes = {
    as: customPropTypes.customOrStringElement('fieldset'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'fieldset',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-fieldset');
    const Element = getElementType(FormFieldset, this.props);
    return <Element {...rest} className={classes} />;
  }
}
