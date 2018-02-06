import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

/**
 * Content part for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionContent extends React.Component {
  static displayName = 'AccordionContent';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
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
      'uk-accordion-content',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(AccordionContent, as);
    return <Element {...rest} className={classes} />;
  }
}
