import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

/**
 * Toggle for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionTitle extends React.Component {
  static displayName = 'AccordionTitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-accordion-title',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(AccordionTitle, as);
    return <Element {...rest} className={classes} />;
  }
}
