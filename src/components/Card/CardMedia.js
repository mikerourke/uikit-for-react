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

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** "alt" prop for the <img> element. */
    imgAlt: PropTypes.string,

    /** "src" prop for the <img> element. */
    imgSrc: PropTypes.string.isRequired,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
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
        className={classes}
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
    );
  }
}

export default CardMedia;
