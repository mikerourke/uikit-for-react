import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import { InlineElement } from '../../base';

export default class Gif extends React.Component {
  static displayName = 'Gif';

  static propTypes = {
    ...InlineElement.propTypes,
    children: CustomPropTypes.explicitNull,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: '',
  };

  render() {
    return <InlineElement {...this.props} as="img" data-uk-gif />;
  }
}