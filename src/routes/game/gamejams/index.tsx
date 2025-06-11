import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { GameConfig } from '~/components/game-card/game-card';

export const config: GameConfig = {
  id: 'gamejams',
  title: 'Game Jams and Freelance',
  description: 'Various gamejams, freelance work and other small projects',
  order: 0,
};

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>Game Jams</h2>
        <p>These are some of my miscellaneous game jam games, freelance work or other small projects I've worked on.</p>
        <h3>Latibulum</h3>
        <p>Prepare to be a hunter... and a victim.</p>
        <p>
          A walking sim with some minor horror and action elements and a unique "different perspective" switch throghout
          the story.
        </p>
        <p>Solo project</p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/Latibulum.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="https://drive.google.com/file/d/10F7uftZdLc6STxhg_IFShrrsWBT4KHMd">
          Download Latibulum_v1.1_(Eng) (Google Drive)
        </a>
        <h3>Bury Me</h3>
        <p>You were betrayed... And now you need to bury your own body while being a ghost.</p>
        <p>Puzzle game with some strategic and platformer elements.</p>
        <p>
          Collaborative project where I was responsible for all of the programming/logic/game mechanics. Also helped
          with some of the level-design.
        </p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/BuryMe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="https://drive.google.com/file/d/1EZxBeCx8lLA_fe59OkKxS55WcTBRQtef">
          Download BuryMe_v.1.0_(Rus) (Google Drive)
        </a>
        <h3>NTTE</h3>
        <p>Gaze into the future... To save yourself in the past.</p>
        <p>Essentially a walking sim with puzzle, parkour and actions elements sprinkled throughout the game.</p>
        <p>Solo project.</p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/NeonTower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="https://drive.google.com/file/d/1NvA-RxiM1g6Egnk2_xF-TBzG5SUlqVi6">
          Download NeonTower_v1.1 (Google Drive)
        </a>
        <h3>Tales of the Past</h3>
        <p>Prototype for an action-adventure game similar to Witcher III.</p>
        <p>
          Team project. I was tasked with creating most of the game's logic (stance and fighting system, magic system,
          leveling system, quests, etc.)
        </p>
        <video width="1024" height="768" controls muted>
          <source src="/games/gamejams/TotP.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </article>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Game Jams - Albert's Portfolio",
  meta: [
    {
      name: 'description',
      content: 'Game Jams',
    },
  ],
};
