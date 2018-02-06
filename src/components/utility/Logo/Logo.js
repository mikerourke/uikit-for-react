import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class Logo extends React.Component {
  static displayName = 'Logo';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
    className: PropTypes.string,
    imgSrc: PropTypes.string,
    inverse: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    inverse: false,
  };

  render() {
    const { as, className, imgSrc, inverse, ...rest } = this.props;
    const classes = classnames(className, 'uk-logo');
    const Element = getElementType(Logo, this.props);
    return (
      <Element {...rest} className={classes}>
        {imgSrc && <img src={imgSrc} alt="" />}
        {inverse && <img className="uk-logo-inverse" src={imgSrc} alt="" />}
      </Element>
    );
  }
}
