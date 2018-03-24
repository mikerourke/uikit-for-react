import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { buildClassName, customPropTypes, UIK } from '../../../lib';
import Base from '../../base';

export default class CardMedia extends React.Component {
  static displayName = 'CardMedia';

  static propTypes = {
    alignTo: PropTypes.oneOf(UIK.LOCATIONS),
    as: customPropTypes.customOrStringElement('div'),
    cover: PropTypes.shape({
      height: ExtraPropTypes.nonNegativeInteger,
      width: ExtraPropTypes.nonNegativeInteger,
    }),
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
  };

  static defaultProps = {
    as: 'div',
    imgAlt: '',
  };

  render() {
    const { alignTo, className, cover, imgAlt, imgSrc, ...rest } = this.props;

    const isCover = !isNil(cover);
    const classes = classnames(
      className,
      'uk-card-media',
      buildClassName('uk-card-media', alignTo),
      {
        'uk-cover-container': isCover,
      },
    );

    return (
      <Base {...rest} component={CardMedia} className={classes}>
        <img src={imgSrc} alt={imgAlt} data-uk-cover={isCover || undefined} />
        {isCover && (
          <canvas height={get(cover, 'height')} width={get(cover, 'width')} />
        )}
      </Base>
    );
  }
}
