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
    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-6">Adicionar plano de estudo</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white">Matéria</label>
          <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"/>
        </div>
        <div>
          <label htmlFor="minutes" className="block text-sm font-medium text-white">Duração (min)</label>
          <input id="minutes" type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} required
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"/>
        </div>
                <div>
          <label htmlFor="image" className="block text-sm font-medium text-white">Imagem (Só se quiser)</label>
          <input id="image" type="file" accept="image/*" onChange={handleImageChange}
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"/>
          {imageUrl && <img src={imageUrl} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded"/>}
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-white">Data</label>
          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"/>
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-white">Anotações</label>
          <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={4}
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"/>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Salvar Sessão
        </button>
      </form>
    </div>
  );
}