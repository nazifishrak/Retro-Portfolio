import RootLayout from "../layout";
import React from "react";
import Timeline from "@/app/components/Timeline";
const Blog = () => {
    return (<>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nazif <mark
                className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Ishrak</mark> Blog
            </h1>

            <div className={'p-5'}>
                <Timeline/>
                <Timeline/>
                <Timeline/>
            </div>
        </>

    );
};

export default Blog; 