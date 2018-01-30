import React from 'react';
import PropTypes from 'prop-types';
import { InlineElement } from '../../base';

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
    source: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['iframe', 'image', 'video']),
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    caption: '',
    className: '',
  };

  render() {
    const { caption, poster, source, type, ...rest } = this.props;
    return (
      <InlineElement
        {...rest}
        href={source}
        data-caption={caption || undefined}
        data-poster={poster || undefined}
        data-type={type || undefined}
      />
    );
  }
}
