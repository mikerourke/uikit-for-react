import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import IconnavItem from './IconnavItem';

export default class Iconnav extends React.Component {
  static displayName = 'Iconnav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(IconnavItem),
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    vertical: false,
  };

  static Item = IconnavItem;

  render() {
    const { className, vertical, ...rest } = this.props;
    
    const classes = classnames(className, 'uk-iconnav', {
      'uk-iconnav-vertical': vertical,
    });
    
    return <Base {...rest} className={classes} component={Iconnav} />;
  }
}
