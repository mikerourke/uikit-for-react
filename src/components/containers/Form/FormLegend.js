import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class FormLegend extends React.Component {
  static displayName = 'FormLegend';

  static propTypes = {
    as: customPropTypes.customOrStringElement('legend'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'legend',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-legend');
    const Element = getElementType(FormLegend, this.props);
    return <Element {...rest} className={classes} />;
  }
}
