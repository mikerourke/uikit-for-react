import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionPanel extends React.Component {
  static displayName = 'AccordionPanel';

  static propTypes = {
    as: customPropTypes.customOrStringElement('li'),
    children: ExtraPropTypes.or([
      ExtraPropTypes.elementType(AccordionContent),
      ExtraPropTypes.elementType(AccordionTitle),
    ]),
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    open: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'li',
    className: '',
    open: false,
  };

  render() {
    const { as, className, flex, margin, open, width, ...rest } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-open': open,
      },
    );

    const Element = getElementType(AccordionPanel, as);
    return <Element {...rest} className={classes} />;
  }
}
