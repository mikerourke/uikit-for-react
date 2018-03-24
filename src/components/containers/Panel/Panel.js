import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class Panel extends React.Component {
  static displayName = 'Panel';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    scrollable: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    scrollable: false,
  };

  render() {
    const { className, scrollable, ...rest } = this.props;
    const classes = classnames(className, 'uk-panel', {
      'uk-panel-scrollable': scrollable,
    });
    return <Base {...rest} className={classes} component={Panel} />;
  }
}
