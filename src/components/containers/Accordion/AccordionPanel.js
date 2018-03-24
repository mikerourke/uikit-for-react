import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionPanel extends React.Component {
  static displayName = 'AccordionPanel';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
    children: ExtraPropTypes.or([
      ExtraPropTypes.elementType(AccordionContent),
      ExtraPropTypes.elementType(AccordionTitle),
    ]),
    open: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
    open: false,
  };

  render() {
    const { className, open, ...rest } = this.props;
    const classes = classnames(className, {
      'uk-open': open,
    });
    return <Base {...rest} component={AccordionPanel} className={classes} />;
  }
}
