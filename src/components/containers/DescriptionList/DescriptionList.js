import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import DescriptionDetails from './DescriptionDetails';
import DescriptionTerm from './DescriptionTerm';

export default class DescriptionList extends React.Component {
  static displayName = 'DescriptionList';

  static propTypes = {
    ...BlockElement.propTypes,
    children: CustomPropTypes.or([
      CustomPropTypes.elementType(DescriptionDetails),
      CustomPropTypes.elementType(DescriptionTerm),
    ]),
    className: PropTypes.string,
    divider: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
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

    return <BlockElement {...rest} as="dl" className={classes} />;
  }
}
