import React from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { customPropTypes, HTML } from '../../../lib';
import { propTypes, extrapolateClasses } from '../../common/flexProps';
import Base from '../../base';

export default class Flex extends React.Component {
  static displayName = 'Flex';

  static propTypes = {
    ...omit(Base.propTypes, 'flex'),
    ...propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    displayAs: true,
  };

  render() {
    const {
      className,
      alignItems,
      direction,
      displayAs,
      grow,
      inline,
      justifyContent,
      order,
      wrap,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      extrapolateClasses({
        alignItems,
        direction,
        displayAs,
        grow,
        inline,
        justifyContent,
        order,
        wrap,
      }),
    );

    return <Base {...rest} className={classes} component={Flex} />;
  }
}
