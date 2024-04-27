import React from 'react';
import ImageItem from "@/app/components/Gallery/ImageItem";

const Gallery = () => {
    return (
        <div className={"px-52"}>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <ImageItem src={"https://images.unsplash.com/photo-1714200408963-0b21daad334f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D"}/>
                    <ImageItem src={"https://images.unsplash.com/photo-1714200408850-14f0f8bae5f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"}/>

                </div>
                <div className="grid gap-4">
                    <ImageItem src={"https://images.unsplash.com/photo-1714200408842-1e63e594bc3f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D"}/>
                    <ImageItem src={"https://images.unsplash.com/photo-1714200408862-f7c284d7e217?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D"}/>

                </div>
                <div className="grid gap-4">
                    <ImageItem src={"https://images.unsplash.com/photo-1714200408860-0a23166c6cc6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D"}/>
                    <ImageItem src={"https://images.unsplash.com/photo-1714200408952-223d9d3197e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D"}/>

                </div>
                <div className="grid gap-4">
                    <ImageItem src={"https://images.unsplash.com/photo-1714201603161-cc0dcc424aea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"}/>
                    <ImageItem src={"https://images.unsplash.com/photo-1714200408876-92656e8a9179?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D"}/>
                    <ImageItem src={""}/>
                </div>
            </div>

        </div>
    );
};

export default Gallery;