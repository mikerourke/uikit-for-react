import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML, UIK,
} from '../../lib';

class CardMedia extends React.Component {
  static meta = {
    name: 'CardMedia',
    ukClass: 'uk-card-media',
  };

  static propTypes = {
    alignTo: PropTypes.oneOf(UIK.LOCATIONS),
    className: PropTypes.string,
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    className: '',
    imgAlt: '',
  };

  render() {
    const {
      alignTo,
      className,
      imgAlt,
      imgSrc,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      CardMedia.meta.ukClass,
      buildClassName(CardMedia.meta.ukClass, alignTo),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
    );
  }
}

export default CardMedia;
