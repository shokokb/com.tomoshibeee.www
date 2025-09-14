import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeroSection from './components/HeroSection';
import FooterMenu from './components/FooterMenu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* 1. Heroセクション */}
        <HeroSection />
        {/* 2. ここに必要に応じてリンク集など追加 */}
        <main className="flex-grow">
          {/* 例：SNSアイコンやリンク集など */}
        </main>
        {/* 3. フッターメニュー */}
        <FooterMenu />
    </div>
      {/*
        <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
       */}
    </>
  )
}

export default App
