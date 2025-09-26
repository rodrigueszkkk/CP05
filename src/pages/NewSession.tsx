// src/pages/NewSession.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { StudySession } from '../types/types';

interface NewSessionProps { onAddSession: (session: Omit<StudySession, 'id'>) => void; }

export default function NewSession({ onAddSession }: NewSessionProps) {
  const [subject, setSubject] = useState('');
  const [minutes, setMinutes] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSession({ subject, minutes: Number(minutes), date, notes, imageUrl });
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">Criar nova Sessão</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Coluna da Esquerda: Detalhes Essenciais */}
          <div className="space-y-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-blue-400 mb-1">Tópico Principal</label>
              <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required
                placeholder="Ex: Aprendendo Smokes no Counter-Strike"
                className="mt-1 w-full p-3 bg-gray-700 rounded border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-0 transition"/>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="minutes" className="block text-sm font-medium text-blue-400 mb-1">Tempo de Foco (min)</label>
                <input id="minutes" type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} required
                  placeholder="99"
                  className="mt-1 w-full p-3 bg-gray-700 rounded border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-0 transition"/>
              </div>
              <div className="flex-1">
                <label htmlFor="date" className="block text-sm font-medium text-blue-400 mb-1">Data da Sessão</label>
                <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required
                  className="mt-1 w-full p-3 bg-gray-700 rounded border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-0 transition"/>
              </div>
            </div>
             <div>
              <label htmlFor="notes" className="block text-sm font-medium text-blue-400 mb-1">Minhas Anotações</label>
              <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={5}
                placeholder="ex: Pixels, Dicas, o que fazer e oque não fazer..."
                className="mt-1 w-full p-3 bg-gray-700 rounded border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-0 transition"/>
            </div>
          </div>

          {/* Coluna da Direita: Upload de Imagem */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-blue-400 mb-1">Imagem(Opcional)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {imageUrl ? (
                  <img src={imageUrl} alt="Preview" className="mx-auto h-40 w-auto object-cover rounded-md"/>
                ) : (
                  <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <div className="flex text-sm text-gray-500">
                  <label htmlFor="image-upload" className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-blue-400 hover:text-blue-500 focus-within:outline-none p-1">
                    <span>Carregue um arquivo</span>
                    <input id="image-upload" name="image-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*"/>
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs text-gray-600">PNG, JPG, GIF até 10MB(se passar do limite explode)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Submissão */}
        <div className="mt-8 pt-5 border-t border-gray-700">
          <div className="flex justify-end">
            <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500">
              Adicionar sessão
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}