import React from 'react';
import PropTypes from 'prop-types';
import Pane from '@folio/stripes-components/lib/Pane';
import { FormattedMessage } from 'react-intl';

export default class FeatureSettings extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <FormattedMessage id="ui-cataloging.settings.some-feature.message" />
      </Pane>
    );
  }
}
