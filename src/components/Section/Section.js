import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, HTML, UIK } from '../../lib';
import Base from '../Base';

export default class Section extends React.Component {
  static displayName = 'Section';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    background: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    children: PropTypes.node.isRequired,
    overlap: PropTypes.bool,
    padding: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge', 'remove']),
    preserveColor: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    overlap: false,
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

    const paddingClass = padding.replace('remove', 'remove-vertical');
    const classes = classnames(
      className,
      'uk-section',
      buildClassName('section', background),
      buildClassName('section', paddingClass),
      {
        'uk-section-overlap': overlap,
        'uk-section-preserve-color': preserveColor,
      },
    );

    return <Base {...rest} className={classes} component={Section} />;
  }
}
