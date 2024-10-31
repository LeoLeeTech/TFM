import MarkdownIt from 'markdown-it';
import 'github-markdown-css/github-markdown.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 引入代码高亮的样式

function App(): JSX.Element {
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

  // document.getElementById('preview').addEventListener('click', function(event) {
  //   if (event.target.tagName === 'P') {
  //     makeEditable(event.target);
  //   }
  // });
  //
  //
  // function makeEditable(element) {
  //   let textarea = document.createElement('textarea');
  //   textarea.value = element.textContent;
  //   element.parentNode.replaceChild(textarea, element);
  //   textarea.focus();
  //
  //   // 当用户完成编辑时，将`textarea`转换回文本
  //   textarea.addEventListener('blur', function() {
  //     let newP = document.createElement('p');
  //     newP.textContent = textarea.value;
  //     textarea.parentNode.replaceChild(newP, textarea);
  //   });
  // }


  let abc = `
Inlinsss e

\`code\`

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

  `
  return (
    <>
      <div
        id="preview"
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: md.render(abc) }} />
    </>
  );
}

export default App;
