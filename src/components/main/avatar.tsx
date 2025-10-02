import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DevTreeConfig } from "@/config";
import { Label } from "../ui/label";

export function CustomAvatar() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-4">
      <Avatar className={`${DevTreeConfig.AvatarRoundedOptions} w-24 h-24`}>
        <AvatarImage src={DevTreeConfig.AvatarUrl} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Label className="pt-3 font-semibold text-2xl">
        {DevTreeConfig.UserName}
      </Label>
    </div>
  );
}
