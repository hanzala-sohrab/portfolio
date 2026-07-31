import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = ({ content }) => {
  if (!content) return <div className="p-4">Select a post from the list.</div>;
  return (
    <article className="p-4 prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
};

export default BlogPost;
