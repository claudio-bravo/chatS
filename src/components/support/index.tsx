import { Conversations } from "./conversations";
import { HeaderSupport } from "./headerSupport";
import { UserConversations } from "./userConversations";

export function SupportComponent() {
  return (
    <HeaderSupport
      childrean={
        <>
          <Conversations />
          <UserConversations />
        </>
      }
    />
  );
}
