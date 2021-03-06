import React, { Component, lazy, Suspense } from 'react';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      hasImage: props.plus,
    }
  }

  loadCursorImage() {
    if (this.state.hasImage && !this.state.trigger) {
      this.setState({ trigger: true });
    }
  }

  showImage(id) {
    const CursorImage = lazy(() => import('./CursorImage'));
    return (
      <Suspense fallback={<span id="loading">Loading...</span>}>
        <CursorImage id={id} />
      </Suspense>
    );
  }

  render() {
    const { name, url, plus } = this.props;
    const id = name
      .replace(/'| &/g, '')
      .replace(/\/| /g, '-')
      .toLowerCase();

    const { trigger, hasImage } = this.state;

    return (
      <li id={`el-${id}`} onMouseEnter={() => this.loadCursorImage()}>
        <a href={url}
          className={plus ? 'plus' : undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        {hasImage && trigger && (
          this.showImage(id)
        )}
      </li>
    );
  }
}

export default ListItem;
