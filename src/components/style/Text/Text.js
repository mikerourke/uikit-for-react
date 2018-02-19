import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Margin, Text as textProps, Utility, Width } from '../../common';

export default class Text extends React.Component {
  static displayName = 'Text';

  static propTypes = {
    ...textProps.propShape,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      textProps.getClasses(rest),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const elementProps = omit(rest, Object.keys(textProps.propShape));
    const Element = getElementType(Text, as);
    return <Element {...elementProps} className={classes || undefined} />;
  }
}
