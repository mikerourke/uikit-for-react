import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, LibraryComponent } from '../../lib';
import Base from '../Base';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionPanel extends React.Component {
  static displayName = 'AccordionPanel';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
    children: customPropTypes.restrictToChildTypes(
      AccordionContent,
      AccordionTitle,
    ),
    open: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
    open: false,
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('accordion-panel');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      const panelNode = this.libComp.domNode;
      const titleElement = panelNode.querySelector('.uk-accordion-title');
      if (titleElement) titleElement.click();
    }
  }

  render() {
    const { className, open, ...rest } = this.props;

    const classes = classnames(className, { 'uk-open': open });

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={AccordionPanel}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
