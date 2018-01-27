import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, UIK } from '../../../lib/index';
import { BlockElement } from '../../base/index';

export default class CardMedia extends React.Component {
  static displayName = 'CardMedia';

  static propTypes = {
    ...BlockElement.propTypes,
    alignTo: PropTypes.oneOf(UIK.LOCATIONS),
    className: PropTypes.string,
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    alignTo: null,
    className: null,
    imgAlt: '',
  };

  render() {
    const { alignTo, className, imgAlt, imgSrc, ...rest } = this.props;

    const ukClass = 'uk-card-media';
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, alignTo),
    );

    return (
      <BlockElement {...rest} as="div" className={classes || undefined}>
        <img src={imgSrc} alt={imgAlt} />
      </BlockElement>
    );
  }
}
