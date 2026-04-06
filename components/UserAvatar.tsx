import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type UserAvatar = {
  src?: string;
  name?: string;
};
export function UserAvatar({ src, name }: UserAvatar) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback>{name?.charAt(0).toUpperCase() || "ME"}</AvatarFallback>
    </Avatar>
  );
}
