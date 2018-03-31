import React from 'react';
import SlidenavContainer from './SlidenavContainer';
import SlidenavNext from './SlidenavNext';
import SlidenavPrevious from './SlidenavPrevious';

export default class Slidenav extends React.Component {
  static displayName = 'Slidenav';
  static Container = SlidenavContainer;
  static Next = SlidenavNext;
  static Previous = SlidenavPrevious;
}
