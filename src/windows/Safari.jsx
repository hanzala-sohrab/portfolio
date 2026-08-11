import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";
import { blogPosts } from "#constants/index.js";
import { useState } from "react";

const Safari = () => {
    const [selectedBlogId, setSelectedBlogId] = useState(null);
    const selectedBlog = blogPosts.find(b => b.id === selectedBlogId);

    return <>
        <div id="window-header">
            <WindowControls target="safari" />
            <PanelLeft className="ml-10 icon" />
            <div className="flex items-center gap-1 ml-5">
                <ChevronLeft 
                    className={`icon ${selectedBlogId ? 'cursor-pointer hover:bg-gray-200' : 'opacity-50'}`} 
                    onClick={() => setSelectedBlogId(null)} 
                />
                <ChevronRight className="icon opacity-50" />
            </div>
            <div className="flex-1 flex-center gap-3">
                <ShieldHalf className="icon" />
                <div className="search">
                    <Search className="icon" />
                    <input type="text" className="flex-1" placeholder="Search or enter website name" />
                </div>
            </div>

            <div className="flex items-center gap-5">
                <Share className="icon" />
                <Plus className="icon" />
                <Copy className="icon" />
            </div>
        </div>
        <div className="blog h-[600px] overflow-y-auto pb-10">
            {selectedBlog ? (
                <div className="blog-content">
                    <button 
                        onClick={() => setSelectedBlogId(null)}
                        className="mb-5 flex items-center gap-2 text-sm text-blue-600 hover:underline cursor-pointer"
                    >
                        <ChevronLeft size={16} /> Back to blogs
                    </button>
                    <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-64 object-cover rounded-xl mb-8" />
                    <p className="text-sm text-gray-500 mb-2">{selectedBlog.date}</p>
                    <h2 className="!text-3xl !mb-8 !text-gray-900">{selectedBlog.title}</h2>
                    <div 
                        className="prose max-w-none text-gray-700 space-y-4" 
                        dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                    />
                </div>
            ) : (
                <>
                    <h2>My developer blogs</h2>
                    <div className="space-y-8">
                        {blogPosts.map(({ id, image, title, date }) => (
                            <div key={id} className="blog-post cursor-pointer group" onClick={() => setSelectedBlogId(id)}>
                                <div className="col-span-2 overflow-hidden rounded-md h-24">
                                    <img src={image} alt={title} className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover" />
                                </div>
                                <div className="content">
                                    <p>{date}</p>
                                    <h3 className="group-hover:text-blue-600 transition-colors">{title}</h3>
                                    <span className="text-blue-600 text-xs flex items-center gap-3 mt-1 group-hover:underline">Read full post <MoveRight className="w-4 h-4" /></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    </>
}

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
