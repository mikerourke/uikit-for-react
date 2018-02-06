import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class FormFieldset extends React.Component {
  static displayName = 'FormFieldset';

  static propTypes = {
    as: customPropTypes.customOrStringElement('fieldset'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'fieldset',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-fieldset',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(FormFieldset, as);
    return <Element {...rest} className={classes} />;
  }
}
