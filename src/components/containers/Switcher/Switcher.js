import React from 'react';
import SwitcherContent from './SwitcherContent';
import SwitcherGoTo from './SwitcherGoTo';
import SwitcherItem from './SwitcherItem';
import SwitcherSwitchable from './SwitcherSwitchable';
import SwitcherToggle from './SwitcherToggle';
import SwitcherToggles from './SwitcherToggles';

export default class Switcher extends React.Component {
  static displayName = 'Switcher';

  static Content = SwitcherContent;
  static GoTo = SwitcherGoTo;
  static Item = SwitcherItem;
  static Switchable = SwitcherSwitchable;
  static Toggle = SwitcherToggle;
  static Toggles = SwitcherToggles;
}
