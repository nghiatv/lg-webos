import kind from '@enact/core/kind';
import React from 'react';

import SideBarContainer from '../../../containers/SideBarContainer';
import ContentContainer from '../../../containers/ContentContainer';

import css from './Body.less';

const Body = kind({
  name: 'Body',

  styles: {
    css,
    className: 'body'
  },

  render: ({ ...rest }) => (
    <div {...rest} className={css.body}>
      {/* <SideBarContainer className={css.sideBar} /> */}
      <ContentContainer className={css.content} />
    </div>
  )
});

export default Body;