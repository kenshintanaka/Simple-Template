import { h } from '@/h';

export const NotFoundPage = () => {
  return (
    <div className="m-auto max-w-2xl" role="alert">
      <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-md">
        <div className="flex items-start space-x-4">
          <img 
            src="assets/icons/not-found.svg" 
            alt="Not Found Icon"
            className="h-10 w-10" 
          />
          <div className="flex-1">
            <h1 className="text-xl font-bold text-red-800">404 - Page Not Found</h1>
            <p className="mt-2 text-base text-red-700">
              Sorry, but the page you were looking for does not exist.
            </p>
            <div className="mt-5">
              <a
                href="/"
                className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-500 focus:outline-2 focus:outline-offset-2 focus:outline-red-600"
              >
                Go to homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
