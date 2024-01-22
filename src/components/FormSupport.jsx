"use client"

import React from "react";
import { useTranslations } from "next-intl";

import Input from "./Input";
import FormCard from "./FormCard";

import { sendEmail } from "@/utils/email";

const FormSupport = () => {
  const t = useTranslations("forms");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event);
  };

  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-12">
          <div className="col-span-2 flex">
            <h4 className="text-[32px]">{t("titles.support")}</h4>
          </div>

          <Input
            label={t("fields.fullName.label")}
            name="name"
            placeholder={t("fields.fullName.placeholder")}
          />

          <Input
            label={t("fields.insuranceNumber.label")}
            name="insurance"
            placeholder={t("fields.insuranceNumber.placeholder")}
          />

          <Input
            type="email"
            label={t("fields.email.label")}
            name="email"
            placeholder={t("fields.email.placeholder")}
          />

          <Input
            label={t("fields.phoneNumber.label")}
            name="phone_number"
            placeholder={t("fields.phoneNumber.placeholder")}
          />

          <div className="col-span-2 flex flex-col">
            <label className="font-bold text-darkGrey">
              {t("fields.claimDetails.label")}
            </label>
            <textarea
              name="claim_details"
              className="w-full rounded-lg bg-white p-3 text-grey"
              placeholder={t("fields.claimDetails.placeholder")}
              rows="5"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-end">
            <button className="rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white">
              {t("buttonsText.support")}
            </button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default FormSupport;
