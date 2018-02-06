import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  getOptionsString,
  HTML,
} from '../../../lib';

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
    horizontal: ExtraPropTypes.mutuallyExclusiveTrueProps(
      'horizontal',
      'stacked',
    ),
    stacked: PropTypes.bool,
  };

  static defaultProps = {
    as: 'form',
    className: '',
    horizontal: false,
    stacked: false,
  };

  render() {
    const { as, className, custom, horizontal, stacked, ...rest } = this.props;

    if (!isNil(custom)) {
      const componentOptions = getOptionsString({
        target: get(custom, 'selectorTarget', false),
      });

      const Element = getElementType(custom, custom);
      return <Element {...rest} data-uk-form-custom={componentOptions} />;
    }

    const ukClass = 'uk-form';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'horizontal')]: horizontal,
      [buildClassName(ukClass, 'stacked')]: stacked,
    });

    const Element = getElementType(Form, this.props);
    return <Element {...rest} className={classes} />;
  }
}
