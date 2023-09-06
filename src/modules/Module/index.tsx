import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function Module() {
  const t = useTranslations("Index");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
