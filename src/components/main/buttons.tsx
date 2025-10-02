import React from "react";
import { Button } from "../ui/button";
import { DevTreeConfig } from "@/config";

type ButtonItem = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

type ButtonsState = {
  buttons: ButtonItem[];
};

export function Buttons({ buttons }: ButtonsState) {
  return (
    <>
      {buttons.map((btn, i) => {
        const Icon = btn.Icon;
        return (
          <div
            key={i}
            className="flex px-4 py-2 justify-center items-center flex-col gap-2 w-full"
          >
            <a
              target="_blank"
              href={btn.href}
              className="w-full justify-center items-center flex flex-col md:max-w-88 xl:max-w-99"
            >
              <Button
                className={`relative cursor-pointer w-full px-3 overflow-hidden ${DevTreeConfig.RoundedOptions}`}
                variant="outline"
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon size={24} />
                </div>
                <div className="flex justify-center w-full">
                  <span className="text-lg">{btn.label}</span>
                </div>
              </Button>
            </a>
          </div>
        );
      })}
    </>
  );
}
