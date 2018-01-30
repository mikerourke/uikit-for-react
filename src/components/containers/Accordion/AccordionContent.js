import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';

/**
 * Content part for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionContent extends React.Component {
  static displayName = 'AccordionContent';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-accordion-content');
    return <BlockElement {...rest} className={classes} />;
  }
}
