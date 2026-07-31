import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import BlogList from "#components/BlogList.jsx";
import BlogPost from "#components/BlogPost.jsx";
import { useState } from 'react';

const Blog = () => {
  const [selected, setSelected] = useState(null);
  return <>
    <div id="window-header">
      <WindowControls target="blog" />
      <h2>Blog</h2>
    </div>
    <div className="flex gap-4" style={{ height: 'calc(100% - 36px)' }}>
      <div style={{ width: 320 }} className="border-r overflow-auto">
        <BlogList onSelect={setSelected} />
      </div>
      <div style={{ flex: 1 }} className="overflow-auto">
        <BlogPost content={selected?.content} />
      </div>
    </div>
  </>;
}

const BlogWindow = WindowWrapper(Blog, 'blog');
export default BlogWindow;
