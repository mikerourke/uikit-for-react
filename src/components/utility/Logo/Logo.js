import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

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
    const { className, imgSrc, inverse, ...rest } = this.props;

    const classes = classnames(className, 'uk-logo');

    return (
      <Base {...rest} className={classes} component={Logo}>
        {imgSrc && <img src={imgSrc} alt="" />}
        {inverse && <img className="uk-logo-inverse" src={imgSrc} alt="" />}
      </Base>
    );
  }
}
