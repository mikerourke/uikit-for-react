import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class VideoSource extends React.Component {
  static displayName = 'VideoSource';

  static propTypes = {
    as: customPropTypes.customOrStringElement('source'),
    children: ExtraPropTypes.explicitNull(),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'source',
    className: '',
  };

  render() {
    const { as, className, flex, inverse, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(VideoSource, as);
    return <Element {...rest} className={classes || undefined} />;
  }
}
