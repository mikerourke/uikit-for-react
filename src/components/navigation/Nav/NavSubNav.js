/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class NavSubNav extends React.Component {
  static displayName = 'NavSubNav';

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
    const { className, title, ...rest } = this.props;
    const classes = classnames(className, 'uk-nav-sub');
    const Title = React.isValidElement(title) ? title : <a href="#">{title}</a>;
    const Element = getElementType(NavSubNav, as);
    return (
      <Fragment>
        <Title />
        <Element {...rest} className={classes} />
      </Fragment>
    );
  }
}
