import React from 'react';
import { customPropTypes } from '../../lib';
import Text from '../Text';

export default class ArticleLead extends React.Component {
  static displayName = 'ArticleLead';

  static propTypes = {
    ...Text.propTypes,
    as: customPropTypes.customOrStringElement('p'),
  };

  static defaultProps = {
    ...Text.defaultProps,
    as: 'p',
  };

  render() {
    return <Text {...this.props} lead />;
  }
}
