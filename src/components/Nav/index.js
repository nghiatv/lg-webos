import kind from '@enact/core/kind'
import PropTypes from 'prop-types'
import React from 'react'
import Item from '@enact/moonstone/Item';
import IconButton from '@enact/moonstone/IconButton';
import css from './index.less'
import { Link } from 'react-router-dom'

const Nav = kind({
  name: 'Nav',
  propTypes: {
    home: PropTypes.object
  },
  styles: {
    css,
    className: 'nav'
  },
  computed: {
    menu: ({ home }) => {
      if (home && home.menu_item && home.menu_item.length) {
        const { menu_item } = home
        return menu_item.map((item, index) => {
          return (
            <Link to="/category" key={index}>
              <Item
                className={css.ulNavItem}

              >{item.name}</Item>
            </Link>
          );
        });

      } else { return (<div />) }
    }
  },
  render: ({ home, menu, ...rest }) => {
    console.log(home)
    return (
      <div className={css.nav}>
        <div className={css.logo}>
          <Link to="/">
            <img src="http://on.vtvcab.vn/img/on_logo.png" alt="" />
          </Link>
        </div>
        <ul className={css.ulNav}>
          {menu}
        </ul>
        <IconButton small className={css.search}>search</IconButton>
        <IconButton small className={css.search}>info</IconButton>
      </div>
    );
  }

})
export default Nav