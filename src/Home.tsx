import React from 'react';

//        <h2><a href="mailto:sky@yea.dev" target="_blank">sky@yea.dev</a></h2>

const GITHUB_LINK = "http://www.github.com/concordgrape";
const YEADEV_LINK = "http://www.yea.dev";
const WHITEBORDER_LINK = "https://apps.apple.com/ca/app/white-border/id1574787497";
const LOREMGEN_LINK = "http://www.loremgen.com";
function Home() {
  return (
    <div>
        <h1>Links</h1>
        <h2><a href={YEADEV_LINK} target="_blank" rel="noreferrer">yea.dev</a></h2>
        <h2><a href={GITHUB_LINK} target="_blank" rel="noreferrer">github.com/concordgrape</a></h2>
        <h3>still adding stuff here lol</h3>
        <hr />
        <h2><a href={WHITEBORDER_LINK} target="_blank" rel="noreferrer">white_border - App</a></h2>
        <h2><a href={LOREMGEN_LINK} target="_blank" rel="noreferrer">LoremGen.com</a></h2>
    </div>
  );
}

export default Home;
