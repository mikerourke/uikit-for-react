// TODO: Finish this component.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class OffcanvasContent extends React.Component {
  static displayName = 'OffcanvasContent';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-offcanvas-content');
    const Element = getElementType(OffcanvasContent, this.props);
    return <Element {...rest} className={classes} />;
  }
}
