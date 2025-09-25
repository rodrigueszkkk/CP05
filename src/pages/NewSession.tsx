// src/pages/NewSession.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudySession } from '../types';

interface NewSessionProps { onAddSession: (session: Omit<StudySession, 'id'>) => void; }

export default function NewSession({ onAddSession }: NewSessionProps) {
  // O estado de cada campo é controlado com useState [cite: 41]
  const [subject, setSubject] = useState('');
  const [minutes, setMinutes] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSession({ subject, minutes: Number(minutes), date, notes });
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-6">Adicionar Sessão de Estudo</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Matéria</label>
          <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"/>
        </div>
        {/* Repetir a estrutura para outros inputs: minutes, date, notes */}
        <div>
          <label htmlFor="minutes" className="block text-sm font-medium">Duração (min)</label>
          <input id="minutes" type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} required
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"/>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">Data</label>
          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"/>
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium">Anotações</label>
          <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={4}
            className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"/>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Salvar Sessão
        </button>
      </form>
    </div>
  );
}