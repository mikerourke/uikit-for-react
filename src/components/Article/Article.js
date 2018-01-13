import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { without } from 'lodash';
import {
  buildAttributeOptions,
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  UIK,
} from '../../lib';
import ArticleBody from './ArticleBody';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';
import Base from '../Base';

export default class Article extends Base {
  static meta = {
    name: 'Article',
    ukClass: 'uk-article',
  };

  static propTypes = {
    ...Base.propTypes,
    // background: commonPropTypes.background,
    // border: PropTypes.oneOf(['circle', 'rounded']),
    // boxShadow: commonPropTypes.boxShadow,
    // children: PropTypes.node.isRequired,
    // className: PropTypes.string,
    // clearfix: PropTypes.bool,
    // display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    // dynamic: PropTypes.bool,
    // firstColumn: PropTypes.string,
    // float: PropTypes.oneOf(['left', 'right']),
    // height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
    // heightMatch: commonPropTypes.heightMatch,
    // hidden: commonPropTypes.hidden,
    // inline: PropTypes.bool,
    // inverse: PropTypes.oneOf(['dark', 'light']),
    // invisible: PropTypes.oneOf([true, false, 'hover']),
    // margin: commonPropTypes.margin,
    // maxHeight: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
    // nextRow: commonPropTypes.nextRow,
    // overflow: PropTypes.oneOf(['auto', 'hidden']),
    // padding: commonPropTypes.padding,
    // position: commonPropTypes.position,
    // resize: PropTypes.oneOf([true, 'vertical']),
    // responsive: PropTypes.oneOf([false, 'height', 'width']),
    // viewport: commonPropTypes.viewport,
    // visible: commonPropTypes.visible,
    // width: commonPropTypes.width,
  };

  static defaultProps = {
    className: '',
  };

  static Body = ArticleBody;
  static Lead = ArticleLead;
  static Meta = ArticleMeta;
  static Title = ArticleTitle;

  handleRef = element => (this.ref = element);

  render() {
    const {
      background,
      border,
      boxShadow,
      children,
      className,
      clearfix,
      display,
      float,
      height,
      hidden,
      inline,
      inverse,
      invisible,
      margin,
      maxHeight,
      overflow,
      padding,
      position,
      resize,
      responsive,
      visible,
      width,
      ...rest
    } = this.props;
    console.log(Article.propTypes);

    const classes = classnames(
      className,
      Article.meta.ukClass,
      buildObjectOrValueClassNames('background', background),
      buildClassName('border', border),
      buildObjectOrValueClassNames('boxShadow', boxShadow),
      buildClassName('display', display),
      buildClassName('float', float),
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildClassName('height', 'max', maxHeight),
      buildObjectOrValueClassNames('hidden', hidden),
      buildClassName(inverse),
      buildClassName('inline', inline),
      buildClassName('invisible', invisible),
      buildObjectOrValueClassNames('margin', margin),
      buildClassName('overflow', overflow),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('position', position),
      buildClassName('responsive', responsive),
      buildObjectOrValueClassNames('visible', visible),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName('clearfix')]: (clearfix),
        [buildClassName('preserve', 'width')]: (responsive === false),
        [buildClassName('resize')]: (resize),
      },
    );

    const { dataAttributes, validProps } = buildAttributeOptions(rest);
    return (
      <article
        {...validProps}
        className={classes || undefined}
        ref={this.handleRef}
        {...dataAttributes}
      >
        {children}
      </article>
    );
  }
}
