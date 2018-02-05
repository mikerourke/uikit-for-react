import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Margin } from '../../common';
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
    margin: Margin.propTypes,
    open: PropTypes.bool,
  };

  static defaultProps = {
    as: 'li',
    className: '',
    open: false,
  };

  render() {
    const { as, className, margin, open, ...rest } = this.props;

    const classes = classnames(className, Margin.getClasses(margin), {
      [buildClassName('open')]: open,
    });

    const Element = getElementType(AccordionPanel, this.props);
    return <Element {...rest} className={classes} />;
  }
}
