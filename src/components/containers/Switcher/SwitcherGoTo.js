import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class SwitcherGoTo extends React.Component {
  static displayName = 'SwitcherGoTo';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    target: PropTypes.oneOfType([
      PropTypes.oneOf(['next', 'previous']),
      ExtraPropTypes.nonNegativeInteger,
    ]).isRequired,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      target,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const Element = getElementType(SwitcherGoTo, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-switcher-item={target.toString()}
      />
    );
  }
}
