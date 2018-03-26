import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

import OverlayContext from './OverlayContext';
import OverlayIcon from './OverlayIcon';
import OverlayImage from './OverlayImage';

export default class Overlay extends React.Component {
  static displayName = 'Overlay';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    position: Base.propTypes.position.isRequired,
    primary: ExtraPropTypes.mutuallyExclusiveTrueProps('primary', 'simple'),
    simple: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    primary: false,
    simple: false,
  };

  static Context = OverlayContext;
  static Icon = OverlayIcon;
  static Image = OverlayImage;

  render() {
    const { className, primary, simple, ...rest } = this.props;

    const classes = classnames(className, 'uk-overlay', {
      'uk-overlay-primary': primary,
      'uk-overlay-default': simple,
    });

    return <Base {...rest} className={classes} component={Overlay} />;
  }
}
