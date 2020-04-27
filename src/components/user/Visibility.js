import React from 'react';
import { FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Visibility() {
  const { t } = useTranslation();


    return(
        <FaEye title={t('passport.visibilityTip')}/>
    );
}

export default Visibility;
