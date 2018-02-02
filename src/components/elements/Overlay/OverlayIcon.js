import React from 'react';
import PropTypes from 'prop-types';
import { InlineElement } from '../../base';

export default class OverlayIcon extends React.Component {
  static displayName = 'OverlayIcon';

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: '',
  };

  render() {
    return <InlineElement {...this.props} as="span" data-uk-overlay-icon />;
  }
}
