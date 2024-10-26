import React from 'react';
import { specialMenu } from './data';

export default function Category({ handleCategory, allCategory, categ, isActive }) {
    const categArray = [...new Set(specialMenu.map((menu) => menu.category))];
    return (
        <ul className='category-btn'>
            <li className={`${isActive === false ? "activeCateg" : ''}`} onClick={() => allCategory()}>All</li>
            {categArray.map((menu) =>
                <li
                    className={`${categ === menu && isActive ? 'activeCateg' : ''}`}
                    key={menu}
                    onClick={() => handleCategory(menu)}>{menu.charAt(0).toUpperCase() + menu.substring(1, menu.length)}
                </li>
            )
            }
        </ul >
    )
}
