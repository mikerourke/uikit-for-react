import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { InlineElement } from '../../base';

/**
 * Toggle for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionTitle extends React.Component {
  static displayName = 'AccordionTitle';

  static propTypes = {
    ...InlineElement.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-accordion-title');
    return <InlineElement {...rest} className={classes} />;
  }
}
