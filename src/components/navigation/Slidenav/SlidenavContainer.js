import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base/index';
import SlidenavItem from './SlidenavPrevious';

export default class SlidenavContainer extends React.Component {
  static displayName = 'SlidenavContainer';

  static propTypes = {
    ...BlockElement.propTypes,
    children: CustomPropTypes.childrenOfType(SlidenavItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-slidenav-container');
    return <BlockElement {...rest} className={classes || undefined} />;
  }
}
