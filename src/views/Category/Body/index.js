import kind from '@enact/core/kind';
import React from 'react';
import css from './Body.less';
import PropTypes from 'prop-types';
import SideBarContainer from '../../../containers/SideBarContainer'
// import Scroller from '@enact/moonstone/Scroller';
// import Item from '@enact/moonstone/Item';
const Body = kind({
  name: 'BodyCategory',
  propTypes: {
    data: PropTypes.object,
  },
  styles: {
    css,
    className: 'bodyCategory'
  },

  render: () => (
    <div className={css.main}>
      <SideBarContainer className={css.sideBar} />
      <div className={css.content} >
        <h1>this is content</h1>
      </div>
    </div>
  )
});

export default Body;