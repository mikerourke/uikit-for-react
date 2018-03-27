/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';

import Base from '../../base';

export default class NavItemGroup extends React.Component {
  static displayName = 'NavItemGroup';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    title: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  render() {
    const { className, title, ...rest } = this.props;

    const classes = classnames(className);
    const Title = React.isValidElement(title) ? title : <a href="#">{title}</a>;

    return (
      <Fragment>
        <Title />
        <Base
          {...rest}
          className={classes || undefined}
          component={NavItemGroup}
        />
      </Fragment>
    );
  }
}
