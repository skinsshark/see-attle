import React, { useEffect } from 'react';

import './ListItem.css';

function ListItem(props) {
  let img;
  const { name, plus } = props;
  const id = name
    .replace(/'| &/g, '')
    .replace(/\/| /g, '-')
    .toLowerCase();

  const hasImage = !plus;

  if (hasImage) {
    img = require('./images/totokaelo.jpg');
  }

  useEffect(() => {
    const el = document.getElementById(`el-${id}`);

    if (hasImage) {
      const imgEl = document.getElementById(id);

      //todo: more logic
      el.addEventListener("mousemove", e => {
        el.classList.add('currHover');
        imgEl.style.display = 'block';
        imgEl.style.left = `${e.clientX + 50}px`;
        imgEl.style.top = `${e.clientY}px`;
      });

      el.addEventListener("mouseout", e => {
        el.classList.remove('currHover');
        imgEl.style.display = 'none';
      });
    }
  }, [id, hasImage]);

  return (
    <li id={`el-${id}`}>
      <span className={plus && 'plus'}>
        {name}
      </span>
      {hasImage && <img alt={id} id={id} src={img} />}
    </li>
  );
}

export default ListItem;
