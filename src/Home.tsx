import React from 'react';

function Home() {
  return (
    <div>
        <h1>Links</h1>
        <h2><a href="http://www.yea.dev" target="_blank">yea.dev</a></h2>
        <h2><a href="http://www.github.com/concordgrape" target="_blank">github.com/concordgrape</a></h2>
        <h2><a href="mailto:sky@yea.dev" target="_blank">sky@yea.dev</a></h2>
        <h3>still adding stuff here lol</h3>
        <hr />
        <h1>Changelog</h1>
        <h2><a href="https://apps.apple.com/ca/app/white-border/id1574787497" target="_blank">white_border - App</a></h2>
        <h3>08/20/23</h3>
        <h4>v1.3.2</h4>
        <ul>
            <li>Bug Fixes</li>
            <li>Optimized for dark mode</li>
            <li>Fixed crashes on iPad</li>
        </ul>  
        <h2><a href="http://www.loremgen.com" target="_blank">LoremGen.com</a></h2>
        <h3>03/05/23</h3>
        <h4>v1.0</h4>
        <ul>
            <li>Initial Release</li>
            <li>Decreased default number of generated paragraphs</li>
            <li>Created original passage section</li>
        </ul>  
    </div>
  );
}

export default Home;
