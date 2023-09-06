import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Module from "@/modules/Module";

export default function Home() {
  // final step
  const t = useTranslations("Index");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/" locale="en">
        EN
      </Link>
      <Link href="/" locale="ru">
        RU
      </Link>
      <br />
      <Module />
    </div>
  );
}
