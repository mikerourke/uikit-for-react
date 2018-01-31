import React from 'react';
import PropTypes from 'prop-types';
import { omit, some } from 'lodash';
import { HTML } from '../../lib';
import BlockElement from './BlockElement';
import InlineElement from './InlineElement';

const asPropType = PropTypes.oneOfType([
  PropTypes.oneOf(HTML.ALL_ELEMENTS),
  PropTypes.element,
  PropTypes.func,
]);

export default class AnyElement extends React.Component {
  static displayName = 'AnyElement';

  static propTypes = {
    ...BlockElement.propTypes,
    ...InlineElement.propTypes,
    as: asPropType.isRequired,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    ...InlineElement.defaultProps,
  };

  static asPropType = asPropType;

  constructor() {
    super();
    this.ref = null;
  }

  render() {
    const { as, ...rest } = this.props;
    const isBlockElement =
      HTML.BLOCK_ELEMENTS.includes(as) ||
      some(Object.keys(rest), BlockElement.propNames);
    const Element = isBlockElement ? BlockElement : InlineElement;

    // This is done to ensure that any invalid props aren't passed to the
    // the element that aren't being handled.
    const OtherElement = isBlockElement ? InlineElement : BlockElement;
    const elementProps = omit(rest, OtherElement.propNames);

    return (
      <Element {...elementProps} as={as} ref={element => (this.ref = element)}>
        {this.props.children}
      </Element>
    );
  }
}
