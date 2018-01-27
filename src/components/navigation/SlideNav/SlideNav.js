import React from 'react';
import SlideNavContainer from './SlideNavContainer';
import SlideNavNext from './SlideNavNext';
import SlideNavPrevious from './SlideNavPrevious';

export default class SlideNav extends React.Component {
  static displayName = 'SlideNav';
  static Container = SlideNavContainer;
  static Next = SlideNavNext;
  static Previous = SlideNavPrevious;
}
