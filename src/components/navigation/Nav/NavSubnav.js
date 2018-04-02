/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes } from '../../../lib';

import Base from '../../base';

export default class NavSubnav extends React.Component {
  static displayName = 'NavSubnav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    title: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  render() {
    const { className, title, ...rest } = this.props;

    const classes = classnames(className, 'uk-nav-sub');

    return (
      <Fragment>
        {!isNil(title) && title}
        <Base {...rest} className={classes} component={NavSubnav} />
      </Fragment>
    );
  }
}
