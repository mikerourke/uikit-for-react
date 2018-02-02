import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionPanel extends React.Component {
  static displayName = 'AccordionPanel';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringChild('li'),
    children: ExtraPropTypes.or([
      ExtraPropTypes.elementType(AccordionContent),
      ExtraPropTypes.elementType(AccordionTitle),
    ]),
    className: PropTypes.string,
    open: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'li',
    className: '',
    open: false,
  };

  render() {
    const { className, open, ...rest } = this.props;
    const classes = classnames(className, { [buildClassName('open')]: open });
    return <BlockElement {...rest} className={classes} />;
  }
}
