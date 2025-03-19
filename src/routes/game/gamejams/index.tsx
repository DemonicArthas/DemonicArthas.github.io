import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>Game Jams</h2>
        <p>These are miscellaneous game jams or other small projects I've worked on.</p>
      </article>
        <h1>Latibulum</h1>
        <p>Prepare to be a hunter... and a victim.</p>
        <p>A walking sim with some minor horror and action elements and a unique "different perspective" switch throghout the story.</p>
        <p>Solo project</p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/latibulum.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="https://drive.google.com/file/d/10F7uftZdLc6STxhg_IFShrrsWBT4KHMd">Download Latibulum_v1.1_(Eng) (Google Drive)</a> 
      <br></br>
        <h1>Bury Me</h1>
        <p>You were betrayed... And now you need to bury your own body while being a ghost.</p>
        <p>Puzzle game with some strategic and platformer elements.</p>
        <p>Collaborative project where I was responsible for all of the programming/logic/game mechanics. Also helped with some of the level-design.</p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/BuryMe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="https://drive.google.com/file/d/1EZxBeCx8lLA_fe59OkKxS55WcTBRQtef">Download BuryMe_v.1.0_(Rus) (Google Drive)</a> 
      <br></br>
        <h1>NTTE</h1>
        <p>Gaze into the future... To save yourself in the past.</p>
        <p>Essentially a walking sim with puzzle, parkour and actions elements sprinkled throghout the game.</p>
        <p>Solo project.</p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/NTTE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="https://drive.google.com/file/d/15K_cdS5pC4DJMnDqxLloxZ7jukX9hHEE">Download NTTE (Google Drive)</a>
      <br></br>
        <h1>Tales of the Past</h1>
        <p>Prototype for an action-adventure game similar to Witcher III.</p>
        <p>Team project. I was tasked with creating most of the game's logic (stance and fighting system, magic system, leveling system, quests, etc.)</p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/TotP.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <br></br>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Game Jams - Albert's Portfolio",
  meta: [
    {
      name: 'description',
      content: "Game Jams",
    },
  ],
};
