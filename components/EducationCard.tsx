import React from "react";

export const EducationCard = ({
    institute_name,
    yearsAttended,
    gradeRange,
    location,
    short_summary,
}: {
    institute_name: string;
    location: string;
    yearsAttended: string;
    gradeRange: string;
    short_summary: string;
}) => {
    return (
        <div className="text-white">
            <div className="flex items-center justify-between space-y-2">
                <div className="flex-3 sm:flex-1">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">
                            {institute_name}
                        </span>
                        <span className="text-sm text-[#e1fe92]">
                            {gradeRange}
                        </span>
                        <span className="text-sm text-[#75ba75]">
                            {location}
                        </span>
                    </div>
                </div>
                <div className="flex-1 text-white/60">
                    <span>{yearsAttended}</span>
                </div>
            </div>
            <div>
                <p className="text-white/80">{short_summary}</p>
            </div>
        </div>
    );
};
