import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class OverlayImage extends React.Component {
  static displayName = 'OverlayImage';

  static propTypes = {
    as: customPropTypes.customOrStringElement('img'),
    children: ExtraPropTypes.explicitNull(),
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    src: PropTypes.string.isRequired,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'img',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(OverlayImage, as);
    return <Element {...rest} className={classes || undefined} />;
  }
}
