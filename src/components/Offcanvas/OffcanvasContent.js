import React from 'react';
import classnames from 'classnames';
import {
  customPropTypes,
  generateIdentifier,
  renderToggleChildren,
} from '../../lib';
import Base from '../Base';

export default class OffcanvasContent extends React.Component {
  static displayName = 'OffcanvasContent';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: customPropTypes.mustContainChildOfType(
      'Offcanvas',
      'OffcanvasToggle',
    ),
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
    const { children, className, ...rest } = this.props;

    const classes = classnames(className, 'uk-offcanvas-content');

    return (
      <Base {...rest} className={classes} component={OffcanvasContent}>
        {renderToggleChildren(
          children,
          'Offcanvas',
          'OffcanvasToggle',
          this.linkingClass,
        )}
      </Base>
    );
  }
}
