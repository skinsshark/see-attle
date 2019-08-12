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
        <h1>When  in... <nobr><span id="cred">SEE</span>-attle</nobr></h1>
      </section>
      <section>
        <h2>Food</h2>
        {/*<p>i really miss some of these places</p>*/}
        <ListItem name="Tavolata" />
        <ListItem name="Eden Hill" />
        <ListItem name="Mike's Noodle House" />
        <ListItem name="Il Corvo" />
        <ListItem name="Sushi Kashiba" />
        <ListItem name="Piroshky Piroshky" />
        <ListItem name="Sitka & Spruce" />
        <ListItem name="Lola" />
        <ListItem name="Ramen Danbo" />
        <ListItem name="The Pink Door" />
        <ListItem name="Din Tai Fung" />
        <ListItem name="General Porpoise Doughnuts" />
        <ListItem name="Frankie & Jo's" />
        <ListItem name="Rachel's Ginger Beer" />
        <ListItem name="Molly Moon's Homemade Ice Cream" />
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
        <ListItem name="Ambrosia Cafe" />
        <ListItem name="The London Plane" />
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
        <ListItem name="Poo Poo Point" />
        <ListItem name="Discovery Park Loop Trail" />
        <ListItem name="Mount/Little Si" />
        <ListItem name="Washington Park Arboretum" />
      </section>

      <section>
        <h2>Art</h2>
        <p>Seattle is all about glass and wood art and I am not a fan of either but here's some places that featured non-glass/wood exhibits</p>
        <ListItem name="Frye Art Museum" />
        <ListItem name="Linda Hodges Gallery" />
        <ListItem name="Seattle Art Museum" />
        <ListItem name="Harris Harvey Gallery" />
        <ListItem name="Bryan Ohno Gallery" />
        <ListItem name="Traver Gallery" />
        <ListItem name="Frederick Holmes and Company" />
        <ListItem name="Treason Gallery" />
        <ListItem name="Center on Contemporary Art (CoCA) Gallery" />
        <ListItem name="Vetri Gallery" />
        <ListItem name="Davidson Galleries" />
      </section>

      <section>
        <h2>Stores</h2>
        {/*<p>lots of fun and cool places around the city</p>*/}
        <ListItem name="Totokaelo" />
        <ListItem name="Standard Goods" />
        <ListItem name="Glasswing Shop" />
        <ListItem name="Homestead Seattle" />
        <ListItem name="The Palm Room" />
        <ListItem name="Prism" />
        <ListItem name="Baby & Company" />
        <ListItem name="The Elliott Bay Book Company" />
        <ListItem name="Uwajimaya" />
      </section>

      <footer>
        <p className="plus ad">Photos not available (coming soon)</p>
      </footer>
    </main>
  );
}

export default App;
