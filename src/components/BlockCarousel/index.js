import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';
import BlockItem from './item';
import css from './index.less'

const BlockCarousel = kind({
  name: 'BlockCarousel',

  propTypes: {
    items: PropTypes.array.isRequired,
  },

  defaultProps: {
    greeting: 'Hello, my name is ...'
  },

  styles: {
    css,
    className: 'blockCarousel'
  },

  computed: {

  },

  render: ({ items }) => {
    return (
      <div className={css.cardContent}>
        {
          items.map((item, index) => {
            {/* <Item className={css.card} key={index}>
                <img src={item.image.thumbnail_url} alt="" />
                <LabeledItem className={css.cardTitle} label={item.view_count ? `${item.view_count} lượt xem` : ``}>{item.name}</LabeledItem>
              </Item> */}
            return (
              <BlockItem item={item} key={index} />
            )
          })
        }
      </div>
    );
  }
});

export default BlockCarousel