import MarkdownIt from 'markdown-it';
import 'github-markdown-css/github-markdown.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 引入代码高亮的样式
import { useState } from 'react'

function App(): JSX.Element {

  const [fileContent, setFileContent] = useState('')

  const handleFileSelect = async () => {
    const content = await window.api.selectFile()
    setFileContent(content)
  }

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }
      return ''; // 使用默认的转义处理
    }
  });

  return (
    <>
      <div className="action">
        <button onClick={handleFileSelect}>
          Select File
        </button>
      </div>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: md.render(fileContent) }} />
    </>
  );
}

export default App;
