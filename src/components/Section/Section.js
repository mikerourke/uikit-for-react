import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, UIK } from '../../lib';
import { BlockElement } from '../Base';

export default class Section extends BlockElement {
  static displayName = 'Section';

  static propTypes = {
    ...BlockElement.propTypes,
    background: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlap: PropTypes.bool,
    padding: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge', 'remove']),
    preserveColor: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    background: null,
    className: null,
    overlap: false,
    padding: null,
    preserveColor: false,
  };

  render() {
    const {
      background,
      className,
      overlap,
      padding,
      preserveColor,
      ...rest
    } = this.props;

    const ukClass = 'uk-section';
    const paddingClass = padding.replace('remove', 'remove-vertical');
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, background),
      buildClassName(ukClass, paddingClass),
      {
        [buildClassName(ukClass, 'overlap')]: overlap,
        [buildClassName(ukClass, 'preserve', 'color')]: preserveColor,
      },
    );

    return <BlockElement {...rest} className={classes || undefined} />;
  }
}
