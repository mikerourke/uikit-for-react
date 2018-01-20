import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

/**
 * Toggle for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionTitle extends React.Component {
  static meta = {
    name: 'AccordionTitle',
    ukClass: 'uk-accordion-title',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    className: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;
    return (
      <InlineElement
        {...rest}
        as="a"
        className={classnames(className, AccordionTitle.meta.ukClass)}
      />
    );
  }
}
