import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  getOptionsString,
  UIK,
} from '../../../lib';

export default class Icon extends React.Component {
  static displayName = 'Icon';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a', 'span'),
    className: PropTypes.string,
    link: PropTypes.bool,
    name: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    ratio: PropTypes.number,
  };

  static defaultProps = {
    as: 'span',
    className: '',
    link: false,
  };

  render() {
    const { as, className, link, name, ratio, ...rest } = this.props;

    const ukClass = 'uk-icon';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'link')]: link,
    });

    const componentOptions = getOptionsString({
      icon: name,
      ratio,
    });

    const Element = getElementType(Icon, as);
    return (
      <Element {...rest} className={classes} data-uk-icon={componentOptions} />
    );
  }
}
