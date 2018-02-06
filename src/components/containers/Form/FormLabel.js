import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class FormLabel extends React.Component {
  static displayName = 'FormLabel';

  static propTypes = {
    as: customPropTypes.customOrStringElement('label'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'label',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-form-label');
    const Element = getElementType(FormLabel, this.props);
    return <Element {...rest} as="label" className={classes} />;
  }
}
