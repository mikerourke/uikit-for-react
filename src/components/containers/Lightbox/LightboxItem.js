import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class LightboxItem extends React.Component {
  static displayName = 'LightboxItem';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a'),
    caption: PropTypes.string,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inline: PropTypes.bool,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    poster: PropTypes.string,
    source: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['iframe', 'image', 'video']),
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    caption: '',
    className: '',
    inline: false,
  };

  render() {
    const {
      as,
      caption,
      className,
      flex,
      inline,
      inverse,
      margin,
      poster,
      source,
      type,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-inline': inline,
      },
    );

    const Element = getElementType(LightboxItem, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        href={source}
        data-caption={caption || undefined}
        data-poster={poster || undefined}
        data-type={type || undefined}
      />
    );
  }
}
