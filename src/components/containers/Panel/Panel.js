import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class Panel extends React.Component {
  static displayName = 'Panel';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    scrollable: PropTypes.bool,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    scrollable: false,
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      scrollable,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-panel',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-panel-scrollable': scrollable,
      },
    );

    const Element = getElementType(Panel, as);
    return <Element {...rest} className={classes} />;
  }
}
