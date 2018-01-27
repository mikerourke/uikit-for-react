import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes, UIK } from '../../../lib/index';
import { BlockElement } from '../../base/index';
import BaseElement from '../../base/BaseElement';

export default class NavbarGroup extends React.Component {
  static displayName = 'NavbarGroup';

  static propTypes = {
    ...BlockElement.propTypes,
    align: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS).isRequired,
    as: BlockElement.asPropType,
    children: restrictToChildTypes(),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    align: null,
    as: 'div',
    className: null,
  };

  render() {
    const { align, className, ...rest } = this.props;
    const classes = classnames(className, buildClassName('navbar', align));
    return <BaseElement {...rest} className={classes || undefined} />;
  }
}
