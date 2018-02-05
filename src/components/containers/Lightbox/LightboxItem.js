import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class LightboxItem extends React.Component {
  static displayName = 'LightboxItem';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a'),
    caption: PropTypes.string,
    className: PropTypes.string,
    inline: PropTypes.bool,
    poster: PropTypes.string,
    source: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['iframe', 'image', 'video']),
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
      inline,
      poster,
      source,
      type,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [buildClassName('inline')]: inline,
    });

    const Element = getElementType(LightboxItem, this.props);
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
