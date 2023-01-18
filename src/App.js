
import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  // a header (H1 size), 
  // a sub header (H2 size), 
  // a link, 
  // inline code,
  //  a code block, 
  //  a list item, 
  //  a blockquote, 
  //  an image,
  //  and bolded text
  const [text, setText] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)

  \`code\`

  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\` 

  1. First item
  2. Second item
  3. Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**

  `);

  marked.setOptions({
    breaks:true
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className='editorWrap'>
          <div className='toolbar'><b> Editor</b></div>
          <textarea id='editor' type="text" onChange={(event) => {
            setText(event.target.value);
          }}
            value={text}
          ></textarea>
        </div>
        <div className='converter'></div>
        <div className='previewWrap'>
          <div className='toolbar'> <b>Previewer</b></div>
          <div id='preview' dangerouslySetInnerHTML={{
            __html: marked(text),
          }}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
