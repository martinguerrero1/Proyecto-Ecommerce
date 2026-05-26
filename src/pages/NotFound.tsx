import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Página no encontrada
      </h2>

      <p className="mt-2 max-w-md text-gray-500">
        La página que estás buscando no existe o fue movida.
      </p>

      <div className="mt-6">
        <Link
          to="/"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
