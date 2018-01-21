import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class ButtonGroup extends BlockElement {
  static meta = {
    name: 'ButtonGroup',
    ukClass: 'uk-button-group',
  };

  static propTypes = BlockElement.propTypes;

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        as="div"
        className={classnames(className, ButtonGroup.meta.ukClass)}
      />
    );
  }
}
