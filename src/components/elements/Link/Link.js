import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Text from '../../style/Text';

export default class Link extends React.Component {
  static displayName = 'Link';

  static propTypes = {
    ...Text.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    children: PropTypes.node,
    muted: PropTypes.bool,
    reset: PropTypes.bool,
    text: PropTypes.bool,
  };

  static defaultProps = {
    ...Text.defaultProps,
    as: 'a',
    muted: false,
    reset: false,
    text: false,
  };

  render() {
    const { className, muted, reset, text, ...rest } = this.props;

    const classes = classnames(className, 'uk-link', {
      'uk-link-muted': muted,
      'uk-link-reset': reset,
      'uk-link-text': text === true,
    });

    return <Text {...rest} className={classes} component={Link} />;
  }
}
