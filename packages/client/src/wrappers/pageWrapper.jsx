import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="flex flex-1 min-h-[100vh]">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex gap-2 flex-1 flex-wrap w-full  overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
