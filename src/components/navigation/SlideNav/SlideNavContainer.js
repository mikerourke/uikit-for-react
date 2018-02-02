import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';
import SlideNavItem from './SlideNavPrevious';

export default class SlideNavContainer extends React.Component {
  static displayName = 'SlideNavContainer';

  static propTypes = {
    ...BlockElement.propTypes,
    children: ExtraPropTypes.childrenOfType(SlideNavItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-slidenav-container');
    return <BlockElement {...rest} className={classes} />;
  }
}
