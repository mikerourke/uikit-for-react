import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Text from '../Text';

export default class Link extends React.Component {
  static displayName = 'Link';

  static propTypes = {
    ...Text.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    heading: PropTypes.bool,
    muted: PropTypes.bool,
    reset: PropTypes.bool,
    text: PropTypes.bool,
  };

  static defaultProps = {
    ...Text.defaultProps,
    as: 'a',
    heading: false,
    muted: false,
    reset: false,
    text: false,
  };

  render() {
    const { className, heading, muted, reset, text, ...rest } = this.props;

    const classes = classnames(className, 'uk-link', {
      'uk-link-heading': heading,
      'uk-link-muted': muted,
      'uk-link-reset': reset,
      'uk-link-text': text === true,
    });

    return <Text {...rest} className={classes} component={Link} />;
  }
}
