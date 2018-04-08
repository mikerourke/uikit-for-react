import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { buildClassName, customPropTypes, UIK } from '../../lib';
import Base from '../Base';

export default class CardMedia extends React.Component {
  static displayName = 'CardMedia';

  static propTypes = {
    alignTo: PropTypes.oneOf(UIK.LOCATIONS),
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node.isRequired,
    cover: PropTypes.shape({
      height: ExtraPropTypes.nonNegativeInteger,
      width: ExtraPropTypes.nonNegativeInteger,
    }),
  };

  static defaultProps = {
    as: 'div',
  };

  renderChildren = (children, isCover) =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        'uk-cover': isCover ? '' : undefined,
      }),
    );

  render() {
    const { alignTo, children, className, cover, ...rest } = this.props;

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
        {this.renderChildren(children, isCover)}
        {isCover && (
          <canvas height={get(cover, 'height')} width={get(cover, 'width')} />
        )}
      </Base>
    );
  }
}
