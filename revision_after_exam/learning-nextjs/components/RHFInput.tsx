import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

type RHFInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
  isVisible?: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RHFInput({
  label,
  type = "text",
  placeholder,
  registration,
  error,
  isVisible,
  setIsVisible,
}: RHFInputProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="flex gap-2">
        <Input
          id={label}
          type={type}
          placeholder={placeholder}
          {...registration}
          className="h-11 border-2 border-gray-300 focus-visible:border-gray-900 focus-visible:ring-0"
        />
        {label.toLowerCase().includes("password") && (
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setIsVisible?.((prev) => (!prev))
            }
          >
            {isVisible? "Hide" : "Show"}
          </Button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
