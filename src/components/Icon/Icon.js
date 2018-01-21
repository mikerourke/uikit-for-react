import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getOptionsString, UIK } from '../../lib';
import { InlineElement } from '../Base';

export default class Icon extends InlineElement {
  static meta = {
    name: 'Icon',
    ukClass: 'uk-icon',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'span']),
    children: PropTypes.node,
    className: PropTypes.string,
    link: PropTypes.bool,
    name: PropTypes.oneOf(UIK.ICON_NAMES),
    ratio: PropTypes.number,
  };

  static defaultProps = {
    as: 'span',
    link: false,
  };

  render() {
    const { children, className, link, name, ratio, ...rest } = this.props;

    const classes = classnames(className, Icon.meta.ukClass, {
      [buildClassName(Icon.meta.ukClass, 'link')]: link,
    });

    const componentOptions = getOptionsString({
      icon: name,
      ratio,
    });

    return (
      <InlineElement
        {...rest}
        className={classes || undefined}
        data-uk-icon={componentOptions}
      >
        {children}
      </InlineElement>
    );
  }
}
