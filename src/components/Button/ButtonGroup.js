import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class ButtonGroup extends BlockElement {
  static displayName = 'ButtonGroup';

  static propTypes = BlockElement.propTypes;

  static displayProps = BlockElement.displayProps;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-button-group');
    return <BlockElement {...rest} as="div" className={classes || undefined} />;
  }
}
