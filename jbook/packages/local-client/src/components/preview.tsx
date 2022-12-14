import { useEffect, useRef } from 'react';
import './preview.css';

type PreviewProps = {
  code: string;
  err: string;
};

const html = `
<html>
<head>
<style> html { background-color: #fff;}
</style>
</head>
<body>
  <div id="root"></div>
  <script>
  const handleError = (err) => {
    const root = document.querySelector('#root')
    root.innerHTML = '<div style="color: red;"><h4>Runtime error</h4>' + err + '</div>';
    console.log(err);
  }


    window.addEventListener('message', (event) => {
      try{
         eval(event.data);
      } catch (err) {
        handleError(err)
      }
    },false)
  </script>
</body>
</html>
`;

export const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe title="code preview" ref={iframe} sandbox="allow-scripts" srcDoc={html} />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};
