import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class ScrollspyItem extends React.Component {
  static displayName = 'ScrollspyItem';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    groupName: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    groupName: '',
  };

  render() {
    const { groupName, ...rest } = this.props;

    return (
      <Base
        {...rest}
        data-scrollspy-item={groupName}
        component={ScrollspyItem}
      />
    );
  }
}
