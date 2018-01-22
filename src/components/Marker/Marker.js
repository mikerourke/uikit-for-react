import React from 'react';
import PropTypes from 'prop-types';
import { HTML } from '../../lib';
import { InlineElement } from '../Base';

export default class Marker extends InlineElement {
  static displayName = 'Marker';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <InlineElement {...rest} data-uk-marker>
        {children}
      </InlineElement>
    );
  }
}
