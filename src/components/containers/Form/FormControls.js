import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class FormControls extends React.Component {
  static displayName = 'FormControls';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    alignForText: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    alignForText: false,
    className: '',
  };

  render() {
    const {
      alignForText,
      as,
      className,
      flex,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-form-controls',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-form-controls-text': alignForText,
      },
    );

    const Element = getElementType(FormControls, as);
    return <Element {...rest} className={classes} />;
  }
}
