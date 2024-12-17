import { component$, useVisibleTask$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const Routes = [
  { title: 'About', url: '/about' },
  { title: 'Games', url: '/games' },
];

export default component$(() => {
  const timer = useStore({
    totalSeconds: Math.floor(Math.random() * (432000 - 18000 + 1) + 18000),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // eslint-disable-next-line
  useVisibleTask$(() => {
    const update = () => {
      timer.totalSeconds--;
      timer.days = Math.floor(timer.totalSeconds / 86400);
      timer.hours = Math.floor((timer.totalSeconds % 86400) / 3600);
      timer.minutes = Math.floor((timer.totalSeconds % 3600) / 60);
      timer.seconds = timer.totalSeconds % 60;

      console.log(timer);
    };

    const tmrId = setInterval(update, 1000);
    return () => clearInterval(tmrId);
  });

  return (
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          width="200"
          height="280"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          class="max-w-sm select-none rounded-lg shadow-2xl"
        />
        <div class="flex w-fit flex-col items-start">
          <h1 class="text-5xl font-bold">Welcome to my portfolio website!</h1>
          <p class="py-6">
            I'm the best and most experienced—simply put, I'm the greatest talent you'll find on the Unreal Engine
            developer job market.
          </p>
          <div class="mb-8 mt-2 flex w-fit flex-row self-center">
            <button class="btn btn-primary my-auto motion-safe:animate-pulse">Hire me!</button>
            <div
              class="tooltip tooltip-bottom tooltip-open tooltip-warning ml-4 select-none"
              data-tip="Offer is limited!"
            >
              <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
                {timer.totalSeconds > 86400 ? (
                  <div class="flex flex-col">
                    <span class="countdown font-mono text-4xl md:text-5xl">
                      <span style={`--value:${timer.days};`}></span>
                    </span>
                    days
                  </div>
                ) : null}
                {timer.totalSeconds > 3600 ? (
                  <div class="flex flex-col">
                    <span class="countdown font-mono text-4xl md:text-5xl">
                      <span style={`--value:${timer.hours};`}></span>
                    </span>
                    hours
                  </div>
                ) : null}
                {timer.totalSeconds > 60 ? (
                  <div class="flex flex-col">
                    <span class="countdown font-mono text-4xl md:text-5xl">
                      <span style={`--value:${timer.minutes};`}></span>
                    </span>
                    min
                  </div>
                ) : null}
                {timer.totalSeconds > 0 ? (
                  <div class="flex flex-col">
                    <span class="countdown font-mono text-4xl md:text-5xl">
                      <span style={`--value:${timer.seconds};`}></span>
                    </span>
                    sec
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Albert's Portfolio",
  meta: [
    {
      name: 'description',
      content: "Albert's portfolio site",
    },
  ],
};
