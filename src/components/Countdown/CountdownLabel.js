import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CountdownLabel extends BlockElement {
  static meta = {
    name: 'CountdownLabel',
    ukClass: 'uk-countdown-label',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(['div', 'span']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
  };

  render() {
    const { as, children, className, ...rest } = this.props;

    const classes = classnames(className, CountdownLabel.meta.ukClass);

    return (
      <BlockElement {...rest} as={as} className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
