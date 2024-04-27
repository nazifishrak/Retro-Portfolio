import React from 'react';
import SvgIcon from "@/app/components/TimeLine/SVGIcon";
import TimelineItem from "@/app/components/TimeLine/TimelineItem";

import companyLogos from "./companyUrls"
const Timeline = ({cname}:{cname:string}) => {
    return (
        <div className={cname}>
            <ol className="relative text-left border-s border-gray-200 dark:border-gray-700 mx-auto w-full md:w-3/4 ">

                <TimelineItem icon={companyLogos["Broadridge"]} title={"Product Management Intern"}
                              date={"September 2023 – April 2024"} company={" Broadridge"}/>

                <TimelineItem icon={companyLogos["Algorithmics"]} title={"Coding Instructor"} date={" May 2023 – Present"}
                              company={"Algorithmics"}/>

                <TimelineItem icon={companyLogos["D Wave"]} title={"Business Systems Analyst Co-Op"}
                              date={"September 2023 – April 2024"} company={" D-Wave Quantum Systems Inc."}/>



                <TimelineItem icon={companyLogos["UBC"]} title={"Teaching Assistant"} date={"September 2022 – April 2023"}
                              company={"University of British Columbia"}/>



                <TimelineItem icon={companyLogos["Pathao"]} title={"Data Engineer Intern"} date={"May 2023 – August 2023"}
                              company={"Pathao Limited"}/>


            </ol>
        </div>
    );
};

export default Timeline;
