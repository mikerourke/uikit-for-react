import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import ThumbNavImage from './ThumbNavImage';
import ThumbNavItem from './ThumbNavItem';

export default class ThumbNav extends React.Component {
  static displayName = 'ThumbNav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(ThumbNavItem),
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    vertical: false,
  };

  static Image = ThumbNavImage;
  static Item = ThumbNavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const classes = classnames(className, 'uk-thumbnav', {
      'uk-thumbnav-vertical': vertical,
    });

    return (
      <Base {...rest} className={classes || undefined} component={ThumbNav} />
    );
  }
}
