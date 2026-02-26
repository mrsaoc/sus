'use client';

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showError, setShowError] = useState(false);

  const sintomas = [
    "Dor de cabeça",
    "Tosse",
    "Febre",
    "Ressaca",
    "Bicho de pé",
    "Olho tremendo",
    "Dor existencial",
    "Coração partido",
    "Vício em memes",
    "Excesso de fofura",
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "") {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
      // Fundo rosa chiclete, travado na altura da tela (h-screen) e responsivo
      <main className="h-screen w-full flex flex-col items-center justify-center bg-pink-300 overflow-hidden px-4">

        {/* Container responsivo: padding menor no mobile (p-6) e maior em telas um pouco maiores (sm:p-8) */}
        <div className="bg-white p-6 sm:p-8 rounded-[2rem] border-[4px] sm:border-[5px] border-pink-400 shadow-[6px_6px_0px_0px_rgba(255,105,180,0.5)] w-full max-w-sm flex flex-col items-center text-center">

          {/* IMAGEM DA HELLO KITTY: w-24 no mobile, w-32 em telas maiores */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-5 relative rounded-full overflow-hidden border-2 border-pink-300 flex-shrink-0">
            <Image
                src="/hellokitty.jpg"
                alt="Hello Kitty"
                fill
                className="object-cover"
            />
          </div>

          {/* Título adaptável: text-2xl no mobile, text-3xl depois */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-6 sm:mb-8 drop-shadow-sm leading-tight">
            Atendimento SUS
          </h1>

          {/* Label adaptável */}
          <label htmlFor="sintomas" className="text-gray-600 font-bold text-sm sm:text-base mb-2 sm:mb-3 block">
            Selecione seu sintoma:
          </label>

          <div className="w-full relative mb-3">
            {/* Select responsivo: ajusta padding e tamanho da fonte */}
            <select
                id="sintomas"
                onChange={handleSelectChange}
                defaultValue=""
                className="w-full p-3 sm:p-4 border-[3px] sm:border-[4px] border-blue-300 bg-pink-50 rounded-2xl text-gray-700 font-bold text-sm sm:text-base focus:outline-none focus:border-pink-500 cursor-pointer appearance-none text-center"
                style={{textAlignLast: 'center'}}
            >
              <option value="" disabled>-- Escolha --</option>
              {sintomas.map((sintoma, index) => (
                  <option key={index} value={sintoma}>
                    {sintoma}
                  </option>
              ))}
            </select>

            {/* Seta do dropdown */}
            <div className="pointer-events-none absolute inset-y-0 right-3 sm:right-4 flex items-center">
              <svg
                  className="w-5 h-5 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* ERRO: Margens e tamanhos ajustados para caber perfeitamente no mobile */}
          <div
              className={`mt-2 sm:mt-4 bg-red-50 border-[2px] border-red-400 p-3 sm:p-4 rounded-xl w-full shadow-sm transition-opacity duration-300 ${
                  showError ? "opacity-100" : "opacity-0 pointer-events-none hidden"
              }`}
          >
            <p className="text-sm sm:text-base font-extrabold text-red-500 leading-tight">
              Desculpe, outro usuário já possui esse sintoma.
            </p>
          </div>

        </div>
      </main>
  );
}