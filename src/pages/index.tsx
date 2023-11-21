import { useState } from 'react';
import { neuemachinabold, neuemachinalight, neuemachinaregular } from './static/NeueMachina';

export default function Home() {
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);

  const generatePassword = () => {
    if (passwordLength < 6) {
      alert('Uma senha com menos de 6 caracteres é muito insegura. Por favor, escolha um valor maior.');
      return;
    }

    if (passwordLength > 50) {
      alert('O comprimento da senha não pode ser maior que 50 caracteres.');
      return;
    }

    const numbers = '0123456789';
    const symbols = '@#!.';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let validChars = characters;

    if (includeNumbers) {
      validChars += numbers;
    }

    if (includeSymbols) {
      validChars += symbols;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    setGeneratedPassword(password);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
  };

  return (
    <main className={"min-h-screen bg-[#222831] fodase flex items-center justify-center"}>
      <div className="bg-[#393E46] text-[#EEEEEE] p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className={"text-3xl font-bold mb-6 text-center text-[#FFD369] " + neuemachinabold.className}>
          Gerador de Senhas
        </h1>
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeNumbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2 appearance-none border-2 border-[#222831] rounded-md w-5 h-5 checked:bg-[#FFD369] checked:border-transparent focus:outline-none" 
            />
            <label htmlFor="includeNumbers" className={"text-[#EEEEEE] cursor-pointer " + neuemachinaregular.className}>
              Incluir números
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeSymbols"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2 appearance-none border-2 border-[#222831] rounded-md w-5 h-5 checked:bg-[#FFD369] checked:border-transparent focus:outline-none"
            />
            <label htmlFor="includeSymbols" className={"text-[#EEEEEE] cursor-pointer " + neuemachinaregular.className}>
              Incluir símbolos
            </label>
          </div>
          <label className={"text-[#EEEEEE] text-xl " + neuemachinabold.className}>
            Tamanho da senha: {passwordLength}
          </label>
          <input
            type="range"
            min="6"
            max="40"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="w-full h-5 rounded-full appearance-none bg-[#FFD369] focus:outline-none"
          />
          <button
            onClick={generatePassword}
            className={"bg-[#FFD369] text-[#EEEEEE] px-4 py-2 rounded-md hover:bg-[#deb24a] focus:outline-none focus:ring focus:border-[#222831] " + neuemachinabold.className}
          >
            Gerar Senha
          </button>
        </div>
        {generatedPassword && (
          <div className="mt-6 text-center">
            <p className={"text-lg font-bold mb-2 text-[#FFD369] "+ neuemachinabold.className}>Senha gerada:</p>
            <div className="rounded-full bg-[#222831] p-4 mb-4 mx-auto">
              <p className="text-lg">{generatedPassword}</p>
            </div>
            <button
              onClick={copyToClipboard}
              className={"bg-[#FFD369] text-[#EEEEEE] px-4 py-2 rounded-md hover:bg-[#deb24a] focus:outline-none focus:ring focus:border-[#222831] " + neuemachinabold.className}
            >
              {copied ? 'Copiada!' : 'Copiar senha'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
