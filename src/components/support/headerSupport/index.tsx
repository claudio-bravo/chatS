import Link from "next/link";
import { useRouter } from "next/router";
import { ChatCircleDots, Users } from "phosphor-react";
import { ReactNode } from "react";

import styled from "./styles.module.scss";

interface Childrean {
  childrean: ReactNode;
}

export function HeaderSupport({ childrean }: Childrean) {
  const { asPath } = useRouter();

  return (
    <section className={styled.sectionSupport}>
      <div className={styled.contentMain}>
        <aside className={styled.asideButtons}>
          <nav>
            <ul>
              <li
                className={asPath.endsWith("/support") ? styled.activeTest : ""}
              >
                <Link href="/support">
                  <ChatCircleDots
                    size={28}
                    color="#030303"
                    className={styled.svg}
                  />
                </Link>
              </li>
              <li
                className={
                  asPath.endsWith("/support-peoples") ? styled.activeTest : ""
                }
              >
                <Link href="/support-peoples">
                  <Users size={28} color="#030303" className={styled.svg} />
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        {childrean}
      </div>
    </section>
  );
}
