import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';

class DescriptionDetails extends React.Component {
  static meta = {
    name: 'DescriptionDetails',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <dd
        {...rest}
        className={classes || undefined}
      >
        {children}
      </dd>
    );
  }
}

export default DescriptionDetails;
