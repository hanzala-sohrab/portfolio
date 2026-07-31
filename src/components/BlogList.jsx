import { useEffect, useState } from 'react';

const BlogList = ({ onSelect }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob('../blog/*.md', { as: 'raw' });
    const load = async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const content = await resolver();
          const filename = path.split('/').pop().replace('.md', '');
          const titleMatch = content.match(/^#\s+(.+)/m);
          const title = titleMatch ? titleMatch[1].trim() : filename;
          const excerpt = content.split('\n').slice(0, 6).join(' ');
          return { path, filename, title, excerpt, content };
        }),
      );
      setPosts(entries.sort((a, b) => b.filename.localeCompare(a.filename)));
    };
    load();
  }, []);

  return (
    <div className="p-2 overflow-auto" style={{ maxHeight: '60vh' }}>
      {posts.map((p) => (
        <div
          key={p.filename}
          className="cursor-pointer p-2 hover:bg-slate-100 rounded"
          onClick={() => onSelect(p)}
        >
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-slate-600">{p.excerpt}</p>
        </div>
      ))}
      {posts.length === 0 && <div>No posts found.</div>}
    </div>
  );
};

export default BlogList;
