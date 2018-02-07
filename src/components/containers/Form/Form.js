import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
  HTML,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class Form extends React.Component {
  static displayName = 'Form';

  static propTypes = {
    as: customPropTypes.customOrStringElement('form'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    custom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
        selectorTarget: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      }),
    ]),
    flex: Flex.propTypes,
    horizontal: ExtraPropTypes.mutuallyExclusiveTrueProps(
      'horizontal',
      'stacked',
    ),
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    stacked: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'form',
    className: '',
    horizontal: false,
    stacked: false,
  };

  render() {
    const {
      as,
      className,
      custom,
      flex,
      horizontal,
      inverse,
      margin,
      stacked,
      text,
      width,
      ...rest
    } = this.props;

    if (!isNil(custom)) {
      const componentOptions = getOptionsString({
        target: get(custom, 'selectorTarget', false),
      });

      const Element = getElementType(custom, custom);
      return <Element {...rest} data-uk-form-custom={componentOptions} />;
    }

    const classes = classnames(
      className,
      'uk-form',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-form-horizontal': horizontal,
        'uk-form-stacked': stacked,
      },
    );

    const Element = getElementType(Form, as);
    return <Element {...rest} className={classes} />;
  }
}
