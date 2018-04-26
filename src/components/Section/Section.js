import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { buildClassName, customPropTypes, hasChildType, HTML } from '../../lib';
import Base from '../Base';

export default class Section extends React.Component {
  static displayName = 'Section';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    muted: PropTypes.bool,
    overlap: PropTypes.bool,
    padding: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge', 'remove']),
    preserveColor: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    overlap: false,
    preserveColor: false,
  };

  render() {
    const {
      children,
      className,
      muted,
      overlap,
      padding,
      preserveColor,
      primary,
      secondary,
      ...rest
    } = this.props;

    const paddingClass =
      !isNil(padding) && padding.replace('remove', 'remove-vertical');
    const classes = classnames(
      className,
      buildClassName('section', paddingClass),
      {
        'uk-section': !hasChildType(children, 'Section'),
        'uk-section-muted': muted,
        'uk-section-overlap': overlap,
        'uk-preserve-color': preserveColor,
        'uk-section-primary': primary,
        'uk-section-secondary': secondary,
        'uk-section-default': !primary && !secondary && !muted,
      },
    );

    return (
      <Base {...rest} className={classes} component={Section}>
        {children}
      </Base>
    );
  }
}
