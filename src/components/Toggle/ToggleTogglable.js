import React from 'react';
import ExtraPropTypes from 'airbnb-prop-types';
import {
  customPropTypes,
  generateIdentifier,
  HTML,
  renderToggleChildren,
} from '../../lib';
import Base from '../Base';

export default class ToggleTogglable extends React.Component {
  static displayName = 'ToggleTogglable';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: ExtraPropTypes.and([
      customPropTypes.limitToOneOfChildType('ToggleTarget'),
      customPropTypes.mustContainChildOfType('Toggle'),
    ]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  constructor(props) {
    super(props);
    this.linkingClass = generateIdentifier();
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <Base {...rest} component={ToggleTogglable}>
        {renderToggleChildren(
          children,
          'Toggle',
          'ToggleTarget',
          this.linkingClass,
        )}
      </Base>
    );
  }
}
