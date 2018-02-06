import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class SlideNavNext extends React.Component {
  static displayName = 'SlideNavNext';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a'),
    className: PropTypes.string,
    href: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    href: '#',
    large: false,
  };

  render() {
    const { as, className, large, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('slidenav', 'large')]: large,
    });

    const Element = getElementType(SlideNavNext, as);
    return <Element {...rest} className={classes} data-uk-slidenav-next="" />;
  }
}
