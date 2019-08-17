import React, { useEffect } from 'react';

function CursorImage(props) {
  const { id } = props;
  const img = require(`./images/${id}.jpg`);

  useEffect(() => {
    const imgEl = document.getElementById(id);
    const el = document.getElementById(`el-${id}`);

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
  });

  return (
      <img alt={id} id={id} src={img} />
  );
}

export default CursorImage;
