/**
 * @format
 * @flow
 */
import * as React from 'react';
import { Settings } from '@folio/stripes-smart-components';
import FieldGroupings from './FieldGroupings';
import DefaultTemplate from './DefaultTemplate';
import RecordsOverlayRules from './RecordOverlayRules';
import LocalAuthorityRecords from './LocalAuthorityRecords';
import { ActionTypes } from '../../redux/actions/Actions';


type P = {
  stripes: Object;
};

export default class MARCcatSettings extends React.Component<P, {}> {
  constructor(props) {
    super(props);

    const { translate } = this.props;
    this.pages = [
      {
        route: 'general',
        label: translate({
          id: 'ui-marccat.settings.field.groupings',
        }),
        component: FieldGroupings,
      },
      {
        route: 'defaultTemplate',
        label: translate({
          id: 'ui-marccat.settings.default.record.template',
        }),
        component: DefaultTemplate,
      },
      {
        route: 'overlayRules',
        label: translate({
          id: 'ui-marccat.settings.overlay.rules',
        }),
        component: RecordsOverlayRules,
      },
      {
        route: 'authorityRecords',
        label: translate({
          id: 'ui-marccat.settings.authority.records',
        }),
        component: LocalAuthorityRecords,
      },
    ];
  }

  handleOnClick = () => {
    const { store } = this.props;
    store.dispatch({ type: ActionTypes.VIEW_TEMPLATE });
  }


  render() {
    return (
      <Settings
        {...this.props}
        navPaneWidth="20%"
        onClick={this.handleOnClick()}
        pages={this.pages}
      />
    );
  }
}
