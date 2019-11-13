import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import data from './data.json';

class App extends Component {
  componentDidMount() {
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
          {/*<p>i really miss the lo mein in chinatown, sushi by the water, and doughnuts in the Spheres</p>*/}
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
          <h2>Views</h2>
          {/*// <p>not much of a winter hiker but here's what i did and did not do</p>*/}
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
          {/*// <p>i don't remember going out for coffee as much as i do now but here's a short list, not a shortlist</p>*/}
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
          {/*// <p>Seattle is all about glass and wood art and i am not a fan of either but here's some places that featured non-glass/wood exhibits</p>*/}
          {data['art'].map((loc, i) => (
            <ListItem key={i}
              name={loc.name}
              url={loc.url}
              plus={loc.hasImage}
              />
          ))}
        </section>

        <section>
          <h2>Etc</h2>
          {/*// <p>fun and cool places around town to shop or catch up with friends</p>*/}
          {data['other'].map((loc, i) => (
            <ListItem key={i}
              name={loc.name}
              url={loc.url}
              plus={loc.hasImage}
              />
          ))}
        </section>
      </main>
    );
  }
}

export default App;
