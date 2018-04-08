import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes, HTML } from '../../lib/index';
import Base from '../Base/index';

export default class Logo extends React.Component {
  static displayName = 'Logo';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
    imgSrc: PropTypes.string,
    inverse: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
    inverse: false,
  };

  render() {
    const { children, className, imgSrc, inverse, ...rest } = this.props;

    const classes = classnames(className, 'uk-logo');

    const hasChildren = !isNil(children);
    const hasSrc = !isNil(imgSrc);

    return (
      <Base {...rest} className={classes} component={Logo}>
        {hasChildren && children}
        {hasSrc && <img src={imgSrc} alt="" />}
        {inverse && <img className="uk-logo-inverse" src={imgSrc} alt="" />}
      </Base>
    );
  }
}
