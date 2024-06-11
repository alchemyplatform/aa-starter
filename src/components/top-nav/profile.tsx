"use-client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@alchemy/aa-alchemy/react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ProfileMenu } from "./profile-menu";
import { blo } from "blo";

export default function Profile() {
  const user = useUser();
  const email = user?.email;
  const address = user?.address;
  const short = address ? address.slice(0, 6) + "..." + address.slice(-4) : "";

  // TODO: should probably leverage the `isLoadingAccount` from the `useAccount` hook to render some loading states
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center px-2 hover:bg-slate-100 ">
          <Avatar>
            <AvatarImage src={address ? blo(address) : ""} alt={address} />
            <AvatarFallback>0x</AvatarFallback>
          </Avatar>
          <div className="ml-3 flex-col text-ellipsis">
            <div>{short}</div>
            <div>{email}</div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <ProfileMenu />
    </DropdownMenu>
  );
}
