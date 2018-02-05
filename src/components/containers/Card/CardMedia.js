import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  UIK,
} from '../../../lib';

export default class CardMedia extends React.Component {
  static displayName = 'CardMedia';

  static propTypes = {
    alignTo: PropTypes.oneOf(UIK.LOCATIONS),
    as: customPropTypes.customOrStringElement('div'),
    className: PropTypes.string,
    cover: PropTypes.shape({
      height: ExtraPropTypes.nonNegativeInteger,
      width: ExtraPropTypes.nonNegativeInteger,
    }),
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    imgAlt: '',
  };

  render() {
    const {
      alignTo,
      as,
      className,
      cover,
      imgAlt,
      imgSrc,
      ...rest
    } = this.props;

    const isCover = !isNil(cover);
    const ukClass = 'uk-card-media';
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, alignTo),
      {
        [buildClassName('cover', 'container')]: isCover,
      },
    );

    const Element = getElementType(CardMedia, this.props);
    return (
      <Element {...rest} className={classes}>
        <img src={imgSrc} alt={imgAlt} data-uk-cover={isCover || undefined} />
        {isCover && (
          <canvas height={get(cover, 'height')} width={get(cover, 'width')} />
        )}
      </Element>
    );
  }
}
