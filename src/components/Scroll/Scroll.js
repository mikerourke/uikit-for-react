import React from 'react';
import ScrollPoint from './ScrollPoint';
import ScrollScrollable from './ScrollScrollable';

export default class Scroll extends React.Component {
  static displayName = 'Scroll';

  static Point = ScrollPoint;
  static Scrollable = ScrollScrollable;
}
