import React from 'react';
import PropTypes from 'prop-types';
import { InlineElement } from '../../base/index';

export default class LightboxItem extends React.Component {
  static displayName = 'LightboxItem';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['a']),
      PropTypes.element,
      PropTypes.func,
    ]),
    caption: PropTypes.string,
    className: PropTypes.string,
    poster: PropTypes.string,
    source: PropTypes.string,
    type: PropTypes.oneOf(['iframe', 'image', 'video']),
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    caption: null,
    className: null,
    poster: null,
    source: null,
    type: null,
  };

  render() {
    const { caption, poster, source, type, ...rest } = this.props;
    return (
      <InlineElement
        {...rest}
        as="a"
        href={source}
        data-caption={caption}
        data-poster={poster}
        data-type={type}
      />
    );
  }
}
