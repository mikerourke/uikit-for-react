import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
} from '../../lib';

class CardTitle extends React.Component {
  static meta = {
    name: 'CardTitle',
    ukClass: 'uk-card-title',
  };

  static propTypes = {
    as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    as: 'h3',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      CardTitle.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const Element = getElementType(CardTitle, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
      >
        {children}
      </Element>
    );
  }
}

export default CardTitle;
