import React from "react";
import { Button } from "../ui/button";
import { DevDashConfig } from "@/config";

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
          <div className=" flex p-2 rounded justify-center items-center flex-col gap-2 	">
            <a target="_blank" href={btn.href} key={i}>
              <Button
                className={`relative cursor-pointer w-80 ${DevDashConfig.RoundedOptions}	gap-2`}
                variant="outline"
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon size={24} />
                </div>
                <div className="flex justify-center">
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
