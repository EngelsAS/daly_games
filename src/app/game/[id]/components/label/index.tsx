import React from "react";

export const Label = ({ name }: { name: string }) => {
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-200 text-black text-center rounded-lg hover:font-bold duration-200">
      {name}
    </div>
  );
};
