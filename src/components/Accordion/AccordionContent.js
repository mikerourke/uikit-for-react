import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

/**
 * Content part for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionContent extends React.Component {
  static meta = {
    name: 'AccordionContent',
    ukClass: 'uk-accordion-content',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
  };

  render() {
    const { className, ...rest } = this.props;
    return (
      <BlockElement
        {...rest}
        className={classnames(className, AccordionContent.meta.ukClass)}
      />
    );
  }
}
