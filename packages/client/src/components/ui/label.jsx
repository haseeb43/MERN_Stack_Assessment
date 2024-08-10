import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "../../lib/utils";

const Label = ({ className }) => (
  <LabelPrimitive.Root
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
  />
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
