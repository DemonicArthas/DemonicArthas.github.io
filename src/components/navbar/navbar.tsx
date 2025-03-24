import { component$, Slot } from '@builder.io/qwik';

export interface NavbarProps {
  routes: {
    url: string;
    title: string;
  }[];
}

export const Navbar = component$<NavbarProps>((props) => {
  return (
    <div class="navbar bg-base-100 border-b drop-shadow-sm">
      <div class="navbar-start">
        {props.routes.length > 0 ? (
          <div class="dropdown">
            <div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} class="menu dropdown-content menu-sm rounded-box bg-base-100 z-[1] mt-3 w-52 p-2 shadow">
              {props.routes.map((route) => (
                <li key={route.url}>
                  <a href={route.url}>{route.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <a class="btn btn-ghost text-xl" href="/">
          Albert's Portfolio
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          {props.routes.map((route) => (
            <li key={route.url}>
              <a href={route.url}>{route.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div class="navbar-end">
        <Slot name="navbar-end" />
      </div>
    </div>
  );
});
