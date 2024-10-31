import markdownCss from "./assets/github-markdown.css";
import MarkdownIt from 'markdown-it';

function App(): JSX.Element {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  });

  function makeEditable(element) {
    let textarea = document.createElement('textarea');
    textarea.value = element.textContent;
    element.parentNode.replaceChild(textarea, element);
    textarea.focus();

    // 当用户完成编辑时，将`textarea`转换回文本
    textarea.addEventListener('blur', function() {
      let newP = document.createElement('p');
      newP.textContent = textarea.value;
      textarea.parentNode.replaceChild(newP, textarea);
    });
  }


  let abc = `
  # abc
  # b
  # b
  # b
  # b
  # b
  # c
# b
  \`\`\`js
  let
  \`\`\`
  # b
  # b
  # b
  # b
  # b
  # b
  # b
  # b
  <img align='left'  src="https://octodex.github.com/images/minion.png" alt="image-20241030155606372" style="zoom: 10%;" />
  `

  return (
    <>
      <div className='markdownBody'
           dangerouslySetInnerHTML={{ __html: md.render(abc)}} />
    </>
  );
}

export default App;
