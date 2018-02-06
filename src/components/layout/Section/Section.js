import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  HTML,
  UIK,
} from '../../../lib';

export default class Section extends React.Component {
  static displayName = 'Section';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    background: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlap: PropTypes.bool,
    padding: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge', 'remove']),
    preserveColor: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    overlap: false,
    preserveColor: false,
  };

  render() {
    const {
      as,
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

    const Element = getElementType(Section, as);
    return <Element {...rest} className={classes} />;
  }
}
