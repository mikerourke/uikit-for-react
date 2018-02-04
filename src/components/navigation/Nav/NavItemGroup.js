/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class NavItemGroup extends React.Component {
  static displayName = 'NavItemGroup';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'ul',
    className: '',
  };

  render() {
    const { children, title, ...rest } = this.props;
    const Title = React.isValidElement(title) ? title : <a href="#">{title}</a>;
    return (
      <Fragment>
        <Title />
        <BlockElement {...rest}>{children}</BlockElement>
      </Fragment>
    );
  }
}
