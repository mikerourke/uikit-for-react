import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
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
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    open: PropTypes.bool,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'li',
    className: '',
    open: false,
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      open,
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
      {
        'uk-open': open,
      },
    );

    const Element = getElementType(AccordionPanel, as);
    return <Element {...rest} className={classes} />;
  }
}
