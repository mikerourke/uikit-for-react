import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../../base';

export default class Logo extends React.Component {
  static displayName = 'Logo';

  static propTypes = {
    ...InlineElement.propTypes,
    as: InlineElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    imgSrc: PropTypes.string,
    inverse: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    className: '',
    inverse: false,
  };

  render() {
    const { className, imgSrc, inverse, ...rest } = this.props;
    const classes = classnames(className, 'uk-logo');
    return (
      <InlineElement {...rest} className={classes}>
        {imgSrc && <img src={imgSrc} alt="" />}
        {inverse && <img className="uk-logo-inverse" src={imgSrc} alt="" />}
      </InlineElement>
    );
  }
}
