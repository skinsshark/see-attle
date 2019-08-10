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
    img = require('./images/test.png');
  }

  useEffect(() => {
    const el = document.getElementById(`el-${id}`);

    if (hasImage) {
      const imgEl = document.getElementById(id);

      //todo: more logic
      el.addEventListener("mousemove", e => {
        // imgEl.style.display = 'block';
        // imgEl.style.left = `${e.clientX + 50}px`;
        // imgEl.style.top = `${e.clientY}px`;
      })

      el.addEventListener("mouseout", e => {
        imgEl.style.display = 'none';
      })
    }
  }, [id, hasImage]);

  return (
    <li>
      {hasImage && <img alt={id} id={id} src={img} />}
      <span id={`el-${id}`} className={plus && 'plus'}>
        {name}
      </span>
    </li>
  );
}

export default ListItem;
