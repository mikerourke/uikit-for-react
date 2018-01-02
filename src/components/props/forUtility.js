import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, without } from 'lodash';
import {
  buildClassName,
  getOptionsString,
  UIK,
} from '../../lib';

export const utilityPropTypes = {
  border: PropTypes.oneOf(['circle', 'rounded']),
  boxShadow: PropTypes.oneOfType([
    PropTypes.oneOf(UIK.SIZES),
    PropTypes.shape({
      size: PropTypes.oneOf(UIK.SIZES),
      hoverSize: PropTypes.oneOf(UIK.SIZES),
      bottom: PropTypes.bool,
    }),
  ]),
  clearfix: PropTypes.bool,
  display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
  drag: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      showIcon: PropTypes.bool,
      showOver: PropTypes.bool,
    }),
  ]),
  float: PropTypes.oneOf(['left', 'right']),
  height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
  heightMatch: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      target: PropTypes.string,
      row: PropTypes.bool,
    }),
  ]),
  heightViewport: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      offsetTop: PropTypes.bool,
      offsetBottom: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
      ]),
      expand: PropTypes.bool,
    }),
  ]),
  inline: PropTypes.oneOf([true, false, 'clip']),
  leader: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      fill: PropTypes.string,
      media: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(UIK.BREAKPOINTS),
      ]),
    }),
  ]),
  maxHeight: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
  overflow: PropTypes.oneOf(['auto', 'hidden']),
  resize: PropTypes.oneOf([true, false, 'vertical']),
  responsive: PropTypes.oneOf([false, 'height', 'width']),
};

export const getUtilityClassNames = (props) => {
  const height = get(props, 'height');
  const responsive = get(props, 'responsive');

  return classnames(
    buildClassName('border', get(props, 'border')),
    buildClassName('box', 'shadow', get(props, 'boxShadow')),
    buildClassName('box', 'shadow', get(props, ['boxShadow', 'size'])),
    buildClassName('box', 'shadow', 'hover', get(props, ['boxShadow', 'hoverSize'])),
    buildClassName('box', 'shadow', 'bottom', get(props, ['boxShadow', 'bottom'])),
    buildClassName('clearfix', get(props, 'clearfix')),
    buildClassName('display', get(props, 'display')),
    buildClassName('drag', get(props, 'drag')),
    buildClassName('drag', get(props, ['drag', 'showIcon'])),
    buildClassName('dragover', get(props, ['drag', 'showOver'])),
    buildClassName('float', get(props, 'float')),
    buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
    buildClassName('inline', get(props, 'inline')),
    buildClassName('height', 'max', get(props, 'maxHeight')),
    buildClassName('overflow', get(props, 'overflow')),
    buildClassName('resize', get(props, 'resize')),
    buildClassName((responsive === false) ? ['preserve', 'width'] : ['responsive', responsive]),
  );
};

export const getHeightMatchComponentAttributes = props => ({
  'data-uk-height-match': getOptionsString(props.heightMatch),
});

export const getHeightViewportComponentAttributes = props => ({
  'data-uk-height-viewport': getOptionsString(props.heightViewport),
});

export const getLeaderComponentAttributes = props => ({
  'data-uk-leader': getOptionsString(props.leader),
});
