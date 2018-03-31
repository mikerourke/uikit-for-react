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
    href: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    poster: PropTypes.string,
    type: PropTypes.oneOf(['iframe', 'image', 'video']),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
  };

  render() {
    const { className, href, inline, poster, type, ...rest } = this.props;

    const classes = classnames(className, { 'uk-inline': inline });

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={LightboxItem}
        href={href}
        data-poster={poster || undefined}
        data-type={type || undefined}
      />
    );
  }
}
