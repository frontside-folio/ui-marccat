import React from 'react';
import Settings from '@folio/stripes-components/lib/Settings';
import GeneralSettings from './GeneralSettings';
import LogicalViewSettings from './LogicalViewSettings';

type MARCcatSelectSettingsProps = {};
type MARCcatSelectSettingsState = {};

export default class MARCcatSelectSettings extends
  React.Component<MARCcatSelectSettingsProps, MARCcatSelectSettingsState> {
  pages = [
    {
      route: 'general',
      label: this.props.stripes.intl.formatMessage({
        id: 'ui-marccat.settings.general',
      }),
      component: GeneralSettings,
    },
    {
      route: 'logical-view',
      label: this.props.stripes.intl.formatMessage({
        id: 'ui-marccat.settings.logicalview',
      }),
      component: LogicalViewSettings,
    },
  ];

  render() {
    return (
      <Settings
        {...this.props}
        pages={this.pages}
        paneTitle={this.props.stripes.intl.formatMessage({
          id: 'ui-marccat.settings.general',
        })}
      />
    );
  }
}
