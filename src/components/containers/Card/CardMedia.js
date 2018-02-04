import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import { buildClassName, customPropTypes, UIK } from '../../../lib';
import { BlockElement } from '../../base';

export default class CardMedia extends React.Component {
  static displayName = 'CardMedia';

  static propTypes = {
    ...BlockElement.propTypes,
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
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
    imgAlt: '',
  };

  render() {
    const { alignTo, className, cover, imgAlt, imgSrc, ...rest } = this.props;

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

    return (
      <BlockElement {...rest} className={classes}>
        <img src={imgSrc} alt={imgAlt} data-uk-cover={isCover || undefined} />
        {isCover && (
          <canvas height={get(cover, 'height')} width={get(cover, 'width')} />
        )}
      </BlockElement>
    );
  }
}
