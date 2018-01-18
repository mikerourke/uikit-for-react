import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
} from '../../lib';

class Marker extends React.Component {
  static meta = {
    name: 'Marker',
  };

  static propTypes = {
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    position: commonPropTypes.position,
  };

  static defaultProps = {
    as: 'div',
  };

  render() {
    const {
      as,
      children,
      className,
      margin,
      padding,
      position,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Marker.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('position', position),
    );

    const Element = getElementType(Marker, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        data-uk-marker
      >
        {children}
      </Element>
    );
  }
}

export default Marker;
