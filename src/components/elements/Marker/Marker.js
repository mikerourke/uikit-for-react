import React from 'react';
import PropTypes from 'prop-types';
import { HTML } from '../../../lib/index';
import { InlineElement } from '../../base/index';

export default class Marker extends React.Component {
  static displayName = 'Marker';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    className: null,
  };

  render() {
    return <InlineElement {...this.props} data-uk-marker />;
  }
}
