import React from 'react';
import { Getter } from '@devexpress/dx-react-core';
import { sortedRows } from '@devexpress/dx-datagrid-core';

export const LocalSorting = () => (
  <Getter
    name="rows"
    pureComputed={sortedRows}
    connectArgs={getter => [
      getter('rows'),
      getter('sortings'),
    ]}
  />
);