/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class NavSubNav extends React.Component {
  static displayName = 'NavSubNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    title: PropTypes.node.isRequired,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      title,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-nav-sub',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

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
