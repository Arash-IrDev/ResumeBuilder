export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex rounded-md bg-purple-50 px-2 pb-0.5 align-text-bottom text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-700/10">
    {children}
  </span>
);
