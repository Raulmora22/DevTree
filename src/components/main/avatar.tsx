import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { avatarinfo } from "@/config";

export function CustomAvatar() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-4">
      <Avatar className="rounded-lg w-24 h-24">
        <AvatarImage src={avatarinfo} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
