import { h } from '@/h';

export const HomePage = () => {
  const year = new Date().getFullYear().toString()

  return (
    <div class="container max-w-xl mx-auto shadow-lg rounded-lg bg-white/80 backdrop-blur p-8">
      <header class="header mb-8 text-center">
        <h1 class="text-3xl font-bold text-blue-700 mb-2 drop-shadow">
          Welcome to My Simple Template
        </h1>
      </header>
      <main class="main-content mb-8 text-center">
        <p class="text-lg text-gray-700">
          This is a simple HTML template with
          <span class="font-semibold text-pink-600">Tailwind CSS</span>.
        </p>
      </main>
      <footer class="footer text-center text-sm text-gray-500 border-t pt-4">
        <p>
          &copy; {year} Sobbing Cat's Simple Template
        </p>
      </footer>
    </div>
  );
};
