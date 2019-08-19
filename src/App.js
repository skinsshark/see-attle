import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import data from './data.json';

// const col = [
//   '#6aba75',
//   '#9ed8ff',
//   '#d7b0ff',
//   '#485ccf',
//   '#ffd84a',
// ]

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     curr: 'null'
  //   }
  // }

  ugh() {
    console.log('asdf');
  }

  componentDidMount() {
  //   console.log(this.state.curr)
  //   window.addEventListener('scroll', () => {
  //     window.addEventListener("mousemove", e => {
  //       setTimeout(function(){
  //         const all = document.elementsFromPoint(e.clientX, e.clientY);
  //         for (let i = 0; i < all.length; i++) {
  //           if (all[i].localName === 'li') {
  //             if (all[i] != this.state.curr) {
  //               this.setState({ curr: all[i] })
  //               console.log('set')
  //             }
  //           }
  //         }
  //         console.log()
  //       }, 500);
  //     });
  //   }, true);

    const body = document.getElementsByTagName('body')[0];
    const cred = document.getElementById('cred');
    cred.addEventListener("mousemove", e => {
      body.classList.add('cred');
    });

    cred.addEventListener("mouseout", e => {
      body.classList.remove('cred');
    });
  }

  render() {
    return (
      <main>
        <section>
          <h1>When  in... <br /><span id="cred">SEE</span>-attle</h1>
        </section>
        <section>
          <h2>Food</h2>
          <p>i really miss the lo mein in chinatown, sushi by the water, and doughnuts in the Spheres</p>
          {data['food'].map((loc, i) => (
            <ListItem key={i}
              name={loc.name}
              url={loc.url}
              plus={loc.hasImage}
              />
          ))}

          <p className="plus ad">
            see @<a href="https://instagram.com/ethannoms" target="_blank" rel="noopener noreferrer">ethannoms</a> #ad
          </p>

        </section>

        <section>
          <h2>Nature</h2>
          <p>not much of a winter hiker but here's what i did and did not do</p>
          {data['nature'].map((loc, i) => (
            <ListItem key={i}
              name={loc.name}
              url={loc.url}
              plus={loc.hasImage}
              />
          ))}
        </section>

        <section>
          <h2>Cafes</h2>
          <p>i don't remember going out for coffee as much as i do now but here's a short list, not a shortlist</p>
          {data['cafes'].map((loc, i) => (
            <ListItem key={i}
              name={loc.name}
              url={loc.url}
              plus={loc.hasImage}
              />
          ))}
        </section>

        <section>
          <h2>Art</h2>
          <p>Seattle is all about glass and wood art and i am not a fan of either but here's some places that featured non-glass/wood exhibits</p>
          {data['art'].map((loc, i) => (
            <ListItem key={i}
              name={loc.name}
              url={loc.url}
              plus={loc.hasImage}
              />
          ))}
        </section>

        <section>
          <h2>Other</h2>
          {/*<p>lots of fun and cool places around the city</p>*/}
          {data['other'].map((loc, i) => (
            <ListItem key={i}
              name={loc.name}
              url={loc.url}
              plus={loc.hasImage}
              />
          ))}
        </section>

        <footer>
          <p className="plus ad">Photos not available (coming soon)</p>
        </footer>
      </main>
    );
  }
}

export default App;
