/* eslint-disable */

import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./tools";
import * as defaultData from "./data.json";

// styles
import styles from "./Editor.module.scss";

//components
import { Button } from "components";

// assets
import { BiSave } from "react-icons/bi";

const cx = classNames.bind(styles);

const Editor = ({ editor, handleSave: _handleSave, readOnly = false }) => {
  const [btnColor, setBtnColor] = useState(false);

  function pulseSaved(success) {
    setBtnColor(success ? "success" : "failure");

    window.setTimeout(() => setBtnColor("normal"), 500);
  }

  function handleSave() {
    if (!readOnly && _handleSave)
      _handleSave().then((success) => {
        pulseSaved(success);
      });
  }

  useEffect(() => {
    if (!editor.current) {
      const editorInstance = new EditorJS({
        holder: "editorjs",

        tools,

        readOnly,

        onChange: handleSave,

        onReady: () => {
          let data = localStorage.getItem("createPostContentDraft") || {};
          if (data.blocks?.length) {
            data = JSON.parse(data);
          } else {
            data = defaultData;
          }

          editor.current.render(data);
        },

        minHeight: 720,
      });

      editor.current = editorInstance;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="editorjs" className={cx("editor-root")}>
      {!readOnly && (
        <Button
          Prefix={<BiSave />}
          type="button"
          title="Click to save!"
          onClick={handleSave}
          wrapperClass={cx("save-btn", btnColor)}
        />
      )}
    </div>
  );
};

export default Editor;
