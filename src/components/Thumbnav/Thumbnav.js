import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import ThumbnavImage from './ThumbnavImage';
import ThumbnavItem from './ThumbnavItem';

export default class Thumbnav extends React.Component {
  static displayName = 'Thumbnav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(ThumbnavItem),
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    vertical: false,
  };

  static Image = ThumbnavImage;
  static Item = ThumbnavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const classes = classnames(className, 'uk-thumbnav', {
      'uk-thumbnav-vertical': vertical,
    });

    return (
      <Base {...rest} className={classes || undefined} component={Thumbnav} />
    );
  }
}
