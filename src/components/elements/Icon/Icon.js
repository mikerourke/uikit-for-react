import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import {
  customPropTypes,
  getOptionsString,
  LibraryComponent,
  UIK,
} from '../../../lib';
import Base from '../../base';

export default class Icon extends React.Component {
  static displayName = 'Icon';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'span'),
    button: PropTypes.bool,
    link: PropTypes.bool,
    name: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    onSvg: PropTypes.func,
    ratio: PropTypes.number,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
    link: false,
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('icon');
  }

  componentDidMount() {
    const icon = UIkit.icon(this.libComp.cssSelector);
    // TODO: Test this to make sure it works.
    if (!isNil(this.props.onSvg)) {
      icon.svg.then(this.props.onSvg);
    }
  }

  render() {
    const { button, className, link, name, onSvg, ratio, ...rest } = this.props;

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
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
