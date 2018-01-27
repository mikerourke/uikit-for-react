import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../../base';

/**
 * Toggle for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionTitle extends React.Component {
  static displayName = 'AccordionTitle';

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-accordion-title');
    return <InlineElement {...rest} as="a" className={classes} />;
  }
}
