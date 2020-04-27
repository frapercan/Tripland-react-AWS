import { useTranslation } from "react-i18next";
import React from "react";





function PrivatePolivyAndTerms() {

  const { t } = useTranslation()


  return (
    <div>
      <p>
        {t("forms.privatePolicyAndTermsIntro")}{" "}
        <span className={"link"}>{t("forms.privatePolicy")}</span>{" "}
        {t("forms.and")} <span className={"link"}>{t("forms.useTerms")}</span>
      </p>
    </div>
  );
}

export default PrivatePolivyAndTerms;
