"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";

import styles from "./styles.module.scss";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';
\`\`\`
`;

function AdminCreateContainer({ isEditor }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState(mkdStr);

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const body = { title, content, imageUrl };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/admin/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitData} className={styles.formWrapper}>
      <div className={styles.inputGroup}>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          autoFocus
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image url"
          type="text"
          value={imageUrl}
        />
      </div>
      <MDEditor height={500} value={content} onChange={setContent} />

      <button type="submit" disabled={!isEditor}>
        Create {!isEditor && " Only editor can create posts"}
      </button>
    </form>
  );
}

export { AdminCreateContainer };
