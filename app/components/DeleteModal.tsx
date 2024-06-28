import React from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="m-10 flex max-w-lg flex-col items-center rounded-md border px-8 py-10 text-gray-800 shadow-lg bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 rounded-xl bg-red-50 p-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        <p className="mt-4 text-center text-xl font-bold">Deleting User</p>
        <p className="mt-2 text-center text-lg">Are you sure you want to delete your account?</p>
        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <button onClick={onDelete} className="whitespace-nowrap rounded-md bg-red-500 px-4 py-3 font-medium text-white">Yes, delete my account</button>
          <button onClick={onClose} className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
