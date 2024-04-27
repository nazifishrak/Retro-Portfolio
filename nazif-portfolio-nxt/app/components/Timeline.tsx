import React from 'react';
import SvgIcon from "@/app/components/SVGIcon";
import TimelineItem from "@/app/components/TimelineItem";

const Timeline = () => {
    return (
        <div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">

                <TimelineItem icon={"work"} title={"Business Systems Analyst Co-Op"}
                              date={"September 2023 – April 2024"} company={" D-Wave Quantum Systems Inc."}/>

                <TimelineItem icon={"work"} title={"Data Engineer Intern"} date={"May 2023 – August 2023"}
                              company={"Pathao Limited"}/>

                <TimelineItem icon={"work"} title={"Teaching Assistant"} date={"September 2022 – April 2023"}
                              company={"University of British Columbia"}/>

                <TimelineItem icon={"work"} title={"Coding Instructor"} date={" May 2023 – Present"}
                              company={"Algorithmics"}/>


            </ol>
        </div>
    );
};

export default Timeline;
