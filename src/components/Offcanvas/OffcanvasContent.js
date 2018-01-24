// TODO: Finish this component.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class OffcanvasContent extends React.Component {
  static displayName = 'OffcanvasContent';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-offcanvas-content');
    return (
      <BlockElement {...rest} as="div" className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
