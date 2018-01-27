import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../../lib';
import { BlockElement } from '../../base';
import DescriptionDetails from './DescriptionDetails';
import DescriptionTerm from './DescriptionTerm';

export default class DescriptionList extends React.Component {
  static displayName = 'DescriptionList';

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes([DescriptionDetails, DescriptionTerm]),
    className: PropTypes.string,
    divider: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    divider: false,
  };

  static Details = DescriptionDetails;
  static Term = DescriptionTerm;

  render() {
    const { className, divider, ...rest } = this.props;

    const ukClass = 'uk-description-list';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'divider')]: divider,
    });

    return <BlockElement {...rest} as="dl" className={classes || undefined} />;
  }
}
