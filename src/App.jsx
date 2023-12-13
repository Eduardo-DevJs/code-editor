import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import '../index.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import stringDados from './stringData';

const App = () => {
  return (
    <div>
      <header className="header">
        <h1 className="txt_header">
          Explorando o Poder das Manipulações de Strings em JavaScript: 10
          Métodos Essenciais
        </h1>
      </header>
      {stringDados.map(({ id, string, desc, subtitulo }) => (
        <div key={id} className="container">
          <main>
            <h2 className="sub_title">{subtitulo}</h2>
            <p className="txt_desc">{desc}</p>
            <Editor
              value={string}
              highlight={(newString) => highlight(newString, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 20,
                backgroundColor: '#151515',
                color: '#fff',
                borderRadius: 8,
              }}
            />
          </main>
        </div>
      ))}
    </div>
  );
};

export default App;
