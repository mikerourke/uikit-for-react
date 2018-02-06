/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class NavItemGroup extends React.Component {
  static displayName = 'NavItemGroup';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.node.isRequired,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
  };

  render() {
    const { as, children, title, ...rest } = this.props;
    const Title = React.isValidElement(title) ? title : <a href="#">{title}</a>;
    const Element = getElementType(NavItemGroup, this.props);
    return (
      <Fragment>
        <Title />
        <Element {...rest}>{children}</Element>
      </Fragment>
    );
  }
}
