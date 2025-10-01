import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DevDashConfig } from "@/config";
import { Label } from "../ui/label";

export function CustomAvatar() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-4">
      <Avatar className={`${DevDashConfig.AvatarRoundedOptions} w-24 h-24`}>
        <AvatarImage src={DevDashConfig.AvatarUrl} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Label className="pt-3 font-semibold text-2xl">
        {DevDashConfig.UserName}
      </Label>
    </div>
  );
}
