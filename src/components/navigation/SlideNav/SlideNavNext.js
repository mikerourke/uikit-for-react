import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class SlideNavNext extends React.Component {
  static displayName = 'SlideNavNext';

  static propTypes = {
    ...InlineElement.propTypes,
    className: PropTypes.string,
    href: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
    href: '#',
    large: false,
  };

  render() {
    const { className, large, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('slidenav', 'large')]: large,
    });

    return (
      <InlineElement
        {...rest}
        as="a"
        className={classes}
        data-uk-slidenav-next
      />
    );
  }
}