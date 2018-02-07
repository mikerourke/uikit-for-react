import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex as flexProps, Inverse, Margin, Text, Width } from '../../common';

export default class Flex extends React.Component {
  static displayName = 'Flex';

  static propTypes = {
    ...flexProps.propShape,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, inverse, margin, text, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-flex',
      flexProps.getClasses(rest),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const Element = getElementType(Flex, as);
    const elementProps = omit(rest, Object.keys(flexProps.propShape));
    return <Element {...elementProps} className={classes} />;
  }
}
