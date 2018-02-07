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
import { Flex, Inverse, Margin, Width } from '../../common';

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
    flex: Flex.propTypes,
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
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
      flex,
      imgAlt,
      imgSrc,
      inverse,
      margin,
      width,
      ...rest
    } = this.props;

    const isCover = !isNil(cover);
    const ukClass = 'uk-card-media';
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, alignTo),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-cover-container': isCover,
      },
    );

    const Element = getElementType(CardMedia, as);
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
