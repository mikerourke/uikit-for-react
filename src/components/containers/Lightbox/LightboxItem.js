import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class LightboxItem extends React.Component {
  static displayName = 'LightboxItem';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    caption: PropTypes.string,
    inline: PropTypes.bool,
    poster: PropTypes.string,
    source: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['iframe', 'image', 'video']),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
  };

  render() {
    const {
      caption,
      className,
      inline,
      poster,
      source,
      type,
      ...rest
    } = this.props;

    const classes = classnames(className, { 'uk-inline': inline });

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={LightboxItem}
        href={source}
        data-caption={caption || undefined}
        data-poster={poster || undefined}
        data-type={type || undefined}
      />
    );
  }
}
