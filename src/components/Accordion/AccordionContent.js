import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

/**
 * Content part for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionContent extends React.Component {
  static displayName = 'AccordionContent';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-accordion-content');

    return <Base {...rest} className={classes} component={AccordionContent} />;
  }
}
