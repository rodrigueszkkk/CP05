
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center text-white mt-10">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Página Não Encontrada</h2>
      <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-6 inline-block">
        Voltar para a Home
      </Link>
    </div>
  );
}