import React from 'react';
import ComboFilter from './ComboFilter';

function SubjectFilterDetail() {
  return (
    <>
      <ComboFilter
        label="Subject Name"
        placeholder="Subject Name"
        options={fakeSubjects}
      />
    </>
  );
}

export default SubjectFilterDetail;

const fakeSubjects = [
  { label: 'Analisis Matematico I' },
  { label: 'Quimica General' },
  { label: 'Algoritmos II' },
  { label: 'Estado y Sociedad' },
  { label: 'Algebra y Geometrica Analitica' },
  { label: 'Analisis Numerico' },
  { label: 'Termodinamica' },
  { label: 'Quimica Inorganica' },
  { label: 'Quimica Organica' },
  { label: 'Mecanica de los Fluidos' },
  { label: 'Fenomenos de Transporte' },
  { label: 'Ingenieria de Reacciones' },
  { label: 'Teoria de la Administracion' },
  { label: 'Operaciones Unitarias II' },
  { label: 'Fisica III' },
  { label: 'Ciencia de los Materiales' },
];