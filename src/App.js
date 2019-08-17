import React, { useEffect } from 'react';
import './App.css';
import ListItem from './ListItem';

// const col = [
//   '#6aba75',
//   '#9ed8ff',
//   '#d7b0ff',
//   '#485ccf',
//   '#ffd84a',
// ]

function App() {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const cred = document.getElementById('cred');
    cred.addEventListener("mousemove", e => {
      body.classList.add('cred');
    })

    cred.addEventListener("mouseout", e => {
      body.classList.remove('cred');
    })
  }, []);

  return (
    <main>
      <section>
        <h1>When  in... <br /><span id="cred">SEE</span>-attle</h1>
      </section>
      <section>
        <h2>Food</h2>
        <p>i really miss the lo mein in chinatown, sushi by the water, and doughnuts in the Spheres</p>
        <ListItem name="Tavolata" />
        <ListItem name="Eden Hill" />
        <ListItem name="Mike's Noodle House" plus />
        <ListItem name="Il Corvo" />
        <ListItem name="Sushi Kashiba" />
        <ListItem name="Piroshky Piroshky" />
        <ListItem name="Sitka & Spruce" plus />
        <ListItem name="Lola" />
        <ListItem name="Ramen Danbo" />
        <ListItem name="The Pink Door" plus />
        <ListItem name="Din Tai Fung" />
        <ListItem name="General Porpoise Doughnuts" plus />
        <ListItem name="Frankie & Jo's" />
        <ListItem name="Rachel's Ginger Beer" plus />
        <ListItem name="Molly Moon's Homemade Ice Cream" plus />
        <ListItem name="The Walrus and the Carpenter" />
        <ListItem name="Westward" />
        <ListItem name="Shiro's Sushi" />
        <ListItem name="Old School Frozen Custard" />

        <p className="plus ad">
          see @<a href="https://instagram.com/ethannoms" target="_blank" rel="noopener noreferrer">ethannoms</a> #ad
        </p>

      </section>

      <section>
        <h2>Cafes</h2>
        <p>i don't remember going out for coffee as much as i do now but here's a short list, not a shortlist</p>
        <ListItem name="La Marzocco Cafe" plus />
        <ListItem name="Ambrosia Cafe" plus />
        <ListItem name="The London Plane" plus />
        <ListItem name="Cherry Street Coffee House" plus />
        <ListItem name="Grand Central Bakery" plus />
        <ListItem name="Slate Coffee Roasters" plus />
        <ListItem name="Milstead & Co." plus />
        <ListItem name="Stumptown Coffee Roasters" plus />
        <ListItem name="Little Oddfellows" plus />
        <ListItem name="Elm Coffee Roasters" plus />
        <ListItem name="Zeitgeist Coffee" plus />
        <ListItem name="Victrola Coffee Roasters" plus />
        <ListItem name="Caffe Ladro" plus />
        <ListItem name="Storyville Roasters" plus />
      </section>

      <section>
        <h2>Nature</h2>
        <p>not much of a winter hiker but here's what i did</p>
        <ListItem name="Lake 22" />
        <ListItem name="Rattlesnake Ledge" plus />
        <ListItem name="Poo Poo Point" plus />
        <ListItem name="Discovery Park Loop Trail" plus />
        <ListItem name="Mount/Little Si" plus />
        <ListItem name="Washington Park Arboretum" plus />
      </section>

      <section>
        <h2>Art</h2>
        <p>Seattle is all about glass and wood art and i am not a fan of either but here's some places that featured non-glass/wood exhibits</p>
        <ListItem name="Frye Art Museum" />
        <ListItem name="Linda Hodges Gallery" plus />
        <ListItem name="Seattle Art Museum" plus />
        <ListItem name="Harris Harvey Gallery" plus />
        <ListItem name="Bryan Ohno Gallery" plus />
        <ListItem name="Traver Gallery" plus />
        <ListItem name="Frederick Holmes and Company" plus />
        <ListItem name="Treason Gallery" plus />
        <ListItem name="Center on Contemporary Art (CoCA) Gallery" plus />
        <ListItem name="Vetri Gallery" />
        <ListItem name="Davidson Galleries" plus />
      </section>

      <section>
        <h2>Stores</h2>
        {/*<p>lots of fun and cool places around the city</p>*/}
        <ListItem name="Totokaelo" />
        <ListItem name="Standard Goods" plus />
        <ListItem name="Glasswing Shop" />
        <ListItem name="Homestead Seattle" plus />
        <ListItem name="The Palm Room" plus />
        <ListItem name="Prism" plus />
        <ListItem name="Baby & Company" plus />
        <ListItem name="The Elliott Bay Book Company" plus />
        <ListItem name="Uwajimaya" plus />
      </section>

      <footer>
        <p className="plus ad">Photos not available (coming soon)</p>
      </footer>
    </main>
  );
}

export default App;
