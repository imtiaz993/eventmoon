import { useState, useEffect } from "react";

import editorJSHTML from "editorjs-html";
import renderFunctions from "components/Editor/render";

const parser = editorJSHTML(renderFunctions);

function Content({ data }) {
  const [html, setHtml] = useState(null);

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      setHtml(parser.parse(parsedData));
    }
  }, [data]);

  if (!html) return null;

  return (
    <div
      className="blog-root"
      dangerouslySetInnerHTML={{
        __html: html?.reduce((a, b) => a + b.toString(), ""),
      }}
    ></div>
  );
}

export default Content;
