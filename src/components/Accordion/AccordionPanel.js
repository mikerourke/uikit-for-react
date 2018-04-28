import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionPanel extends React.Component {
  static displayName = 'AccordionPanel';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
    open: false,
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      const titleElement = this.ref.querySelector('.uk-accordion-title');
      if (titleElement) titleElement.click();
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { className, open, ...rest } = this.props;

    const classes = classnames(className, { 'uk-open': open });

    return (
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          className={classes || undefined}
          component={AccordionPanel}
        />
      </Ref>
    );
  }
}
