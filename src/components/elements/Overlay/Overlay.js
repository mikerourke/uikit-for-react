import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import OverlayContext from './OverlayContext';
import OverlayIcon from './OverlayIcon';
import OverlayImage from './OverlayImage';

export default class Overlay extends React.Component {
  static displayName = 'Overlay';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    position: BlockElement.propTypes.position.isRequired,
    primary: ExtraPropTypes.mutuallyExclusiveTrueProps('primary', 'simple'),
    simple: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
    primary: false,
    simple: false,
  };

  static Context = OverlayContext;
  static Icon = OverlayIcon;
  static Image = OverlayImage;

  render() {
    const { className, primary, simple, ...rest } = this.props;
    const ukClass = 'uk-overlay';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'primary')]: primary,
      [buildClassName(ukClass, 'default')]: simple,
    });
    return <BlockElement {...rest} className={classes} />;
  }
}
