import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class Divider extends BlockElement {
  static meta = {
    name: 'Divider',
    ukClass: 'uk-divider',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
    icon: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    icon: false,
    small: false,
  };

  render() {
    const { className, icon, small, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName(Divider.meta.className, 'icon')]: icon,
      [buildClassName(Divider.meta.className, 'small')]: small,
    });

    return <BlockElement {...rest} as="hr" className={classes || undefined} />;
  }
}
