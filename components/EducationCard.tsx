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
    <div className="text-white w-full">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex-3 sm:flex-1">
          <div className="flex flex-col">
            <span className="text-xl font-bold">
              <p>{institute_name}</p>
            </span>
            <span className="text-sm flex gap-2 text-[#e1fe92]">
              <p>{gradeRange}</p>
              <p className="text-white/60">({yearsAttended})</p>
            </span>
            <span className="text-sm text-[#75ba75]">
              <p>{location}</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white/80">{short_summary}</p>
      </div>
    </div>
  );
};
