import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Margin } from '../../common';

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
    margin: Margin.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const { as, className, margin, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-accordion-title',
      Margin.getClasses(margin),
    );

    const Element = getElementType(AccordionTitle, this.props);
    return <Element {...rest} className={classes} />;
  }
}
