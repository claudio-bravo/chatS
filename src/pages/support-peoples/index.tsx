import { HeaderSupport } from "../../components/support/headerSupport";
import { People } from "../../components/support/people";
import { UserConversations } from "../../components/support/userConversations";

export default function Peoples() {
  return (
    <HeaderSupport
      childrean={
        <>
          <People />
          <UserConversations />
        </>
      }
    />
  );
}
