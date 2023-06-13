'use client';
import { useRef, useState } from 'react';

export default function Home() {
  const [json, setJson] = useState('');
  const [jsonForm, setJsonForm] = useState({});
  function beautifyJSON() {
    if (json.length !== 0) {
      const parseJson = JSON.parse(json);
      setJson(JSON.stringify(parseJson, null, 4));
    }
  }

  function submitJSON() {
    beautifyJSON();
    setJsonForm(JSON.parse(json));
  }
  return (
    <main className='flex h-screen flex-col items-center justify-between p-12 w-screen'>
      <p className='text-center font-Orbit'>Japture</p>
      <div className='grid text-center lg:grid-cols-2 lg:text-left h-screen w-screen'>
        <div className='w-auto bg-white m-16 rounded-md'>
          <div className='line-numbers'>
            <span></span>
          </div>
          <textarea
            className='w-full h-full bg-[#282a3a] text-white font-mono resize-none rounded-md p-2'
            value={json}
            onChange={(e) => setJson(e.target.value)}
          />
          <button
            className='bg-[#247397] text-white p-3 mr-4 mt-4 rounded-md'
            onClick={submitJSON}
          >
            Submit
          </button>
          <button
            className='bg-[#247397] text-white p-3 mr-4 mt-4 rounded-md'
            onClick={beautifyJSON}
          >
            Beautify
          </button>
        </div>
        <div className='w-auto bg-[#170f30] m-16 rounded-md'>
          {Object.keys(jsonForm!).map((key) => {
            return (
              <div
                key={key}
                className='m-4'
              >
                <label className='text-white'>{key}: </label>
                <input
                  type='text'
                  className='text-black ml-2 pl-2  border-solid border-violet-600 rounded-md'
                  value={jsonForm![key]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
