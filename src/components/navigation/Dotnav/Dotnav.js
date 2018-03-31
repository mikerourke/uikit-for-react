import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import DotnavItem from './DotnavItem';

class Dotnav extends React.Component {
  static displayName = 'Dotnav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(DotnavItem),
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    vertical: false,
  };

  static Item = DotnavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const classes = classnames(className, 'uk-dotnav', {
      'uk-dotnav-vertical': vertical,
    });

    return <Base {...rest} className={classes} component={Dotnav} />;
  }
}

export default Dotnav;
