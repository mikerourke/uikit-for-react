import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getOptionsString, UIK } from '../../../lib';
import Base from '../../base';

export default class Icon extends React.Component {
  static displayName = 'Icon';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'span'),
    button: PropTypes.bool,
    link: PropTypes.bool,
    name: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    ratio: PropTypes.number,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
    link: false,
  };

  render() {
    const { button, className, link, name, ratio, ...rest } = this.props;

    const classes = classnames(className, 'uk-icon', {
      'uk-icon-button': button,
      'uk-icon-link': link,
    });

    return (
      <Base
        {...rest}
        className={classes}
        component={Icon}
        uk-icon={getOptionsString({ icon: name, ratio })}
      />
    );
  }
}
