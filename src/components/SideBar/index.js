import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import CityItem from './CityItem';
import css from './SideBar.less';

const SideBar = kind({
    name: 'SideBar',

    propTypes: {
        data: PropTypes.object.isRequired,
        onMenuChange: PropTypes.func,
        zoom: PropTypes.bool
    },

    styles: {
        css,
        className: 'sideBar'
    },

    computed: {
        className: ({ zoom, styler }) => {
            return styler.append(css.sideBar, { zoom });
        },
        cityList: ({ data, onMenuChange, ...rest }) => {
            if (data && data.children) {
                return data.children.map((item, index) => {
                    return (
                        <CityItem
                            {...rest}
                            city={item}
                            key={index}
                            onMenuChange={onMenuChange}
                        />
                    );
                });
            }
            else {
                return <div />
            }
        }
    },

    render: ({ cityList, ...rest }) => {
        return (
            <div {...rest}>
                {cityList}
            </div>
        );
    }
});

export default SideBar;