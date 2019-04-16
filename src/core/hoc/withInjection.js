/**
 *
 * @format
 * @flow
 */
import * as React from 'react';
import { withRoot } from '@folio/stripes-core/src/components/Root/RootContext';
import { injectIntl } from 'react-intl';
import { safeObj } from '../../shared/Function';

/**
 * HOC
 * @param {WrappedComponent} a Component to inject props
 */
export default function injectCommonProp<Props: {
}>(Component: React.ComponentType<Props>): React.ComponentType<Props> {
  function WrapperComponent(props: Props) {
    const { history, root: { store }, intl: { formatMessage } } = props;
    const state = store.getState();
    const data = state.marccat;
    const form = safeObj(state, 'form');
    const dataStore = safeObj(state.marccat, 'data');
    const settings = safeObj(state.marccat, 'settings');
    const searchHistory = safeObj(state.marccat, 'history');
    return (
      <Component
        {...props}
        data={data}
        forms={form}
        store={store}
        router={history}
        settings={settings}
        datastore={dataStore}
        searchHistory={searchHistory}
        translate={formatMessage}
      />
    );
  }
  return withRoot(injectIntl(WrapperComponent));
}
