/**
 * @format
 * @flow
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Dropdown,
  DropdownMenu,
  Button,
  PaneMenu,
  Icon
} from '@folio/stripes/components';
import type { Props } from '../../../core';
import style from '../../Style/Dropdown.css';

type P = Props & {
  onToggle(): void,
  open: boolean
}

export default function CreateButtonMenu({ ...props }:P) {
  const { onToggle, open, labels } = props;

  const renderDropdDownMenu = () => {
    return (
      <React.Fragment>
        <div className={style.dropdownContainer}>
          {labels.map((l, i) => (
            <div className={style.dropdownShortcut} key={i}>
              {l.label}
              <span>{l.shortcut}</span>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  };

  return (
    <PaneMenu>
      <Dropdown
        id="AddPermissionDropdown"
        open={open}
        onToggle={onToggle}
        group
        pullRight
      >
        <Button
          data-role="toggle"
          align="end"
          bottomMargin0
          aria-haspopup="true"
          buttonStyle="primary"
        >
          <FormattedMessage id="ui-marccat.search.record.new.keyboard" />
          <Icon
            icon="caret-down"
            size="small"
            iconClassName="myClass"
          />
        </Button>
        <DropdownMenu
          data-role="menu"
          aria-label="available permissions"
          onToggle={onToggle}
        >
          {renderDropdDownMenu()}
        </DropdownMenu>
      </Dropdown>
    </PaneMenu>
  );
}