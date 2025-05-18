import React from 'react';
import { Search } from 'lucide-react';

interface InputFormProps {
  userInput: string;
  setUserInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  placeholder: string;
  loading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  userInput,
  setUserInput,
  handleSubmit,
  placeholder,
  loading
}) => {
  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3 px-4 pl-12 bg-black bg-opacity-30 backdrop-blur-md border border-purple-500 border-opacity-30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
        <button
          type="submit"
          disabled={loading || !userInput.trim()}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-all duration-300 ${
            loading || !userInput.trim()
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:from-purple-700 hover:to-pink-700'
          }`}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </form>
  );
};

export default InputForm;