import React from 'react';
import SvgIcon from "@/app/components/SVGIcon";

const Timeline = () => {
    return (
        <div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">

                {/* Business Systems Analyst Co-Op */}
                <li className="mb-10 ms-6">
                    <span
                        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <SvgIcon icon="work"/>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Business Systems Analyst Co-Op
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2023 – April 2024
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        D-Wave Quantum Systems Inc.
                    </p>
                </li>

                {/* Data Engineer Intern */}
                <li className="mb-10 ms-6">
                    <span
                        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <SvgIcon icon="work"/>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Data Engineer Intern
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        May 2023 – August 2023
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Pathao Limited
                    </p>
                </li>

                {/* Teaching Assistant */}
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <SvgIcon icon="work"/>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Teaching Assistant
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2022 – April 2023
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        University of British Columbia
                    </p>
                </li>

                {/* Coding Instructor */}
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <SvgIcon icon="work"/>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Coding Instructor
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        May 2023 – Present
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Algorithmics
                    </p>
                </li>

            </ol>
        </div>
    );
};

export default Timeline;
