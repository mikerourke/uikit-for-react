/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class NavSubNav extends React.Component {
  static displayName = 'NavSubNav';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringChild('ul'),
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
    const { className, title, ...rest } = this.props;
    const Title = React.isValidElement(title) ? title : <a href="#">{title}</a>;
    const classes = classnames(className, 'uk-nav-sub');
    return (
      <Fragment>
        <Title />
        <BlockElement {...rest} className={classes} />
      </Fragment>
    );
  }
}