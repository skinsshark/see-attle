import React, { useEffect, useState } from 'react';

function CursorImage(props) {
  const [isLoaded, onImageLoad] = useState(false);
  const { id } = props;
  const img = require(`./images/${id}.jpg`);

  useEffect(() => {
    const imgEl = document.getElementById(id);
    const el = document.getElementById(`el-${id}`);
    const elLink = document.querySelector(`#el-${id} a`);

    if (isLoaded) {
      elLink.style.cursor = 'crosshair';
      el.classList.add('currHover');
      imgEl.style.display = 'block';
    } else {
      elLink.style.cursor = 'progress';
      el.addEventListener("mousemove", e => {
        imgEl.style.left = `${e.clientX + 50}px`;
        imgEl.style.opacity = '1';
        imgEl.style.zIndex = '-1';
        imgEl.style.display = 'block';
        imgEl.style.top = `${e.clientY - imgEl.height/2}px`;
      });
    }

    el.addEventListener("mouseout", e => {
      el.classList.remove('currHover');
      imgEl.style.display = 'none';
      // imgEl.style.zIndex = '-100';
    });
  });

  return (
      <img alt={id} id={id} src={img} onLoad={() => {onImageLoad(!isLoaded)}}/>
  );
}

export default CursorImage;
