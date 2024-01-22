"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Input from "./Input";
import FormCard from "./FormCard";
import { sendEmail } from "@/utils/email";

const FormQuote = () => {
  const t = useTranslations("forms");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event);
  };

  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full grid-cols-2 gap-6  md:gap-12">
          <Input
            className=""
            label={t("fields.name.label")}
            placeholder={t("fields.name.placeholder")}
          />
          <div className="col-span-2 flex w-full flex-col gap-1 md:col-span-1">
            <label className="font-bold text-darkGrey">
              {t("fields.identifyDocument.label")}
            </label>
            <input
              type="file"
              name="identify_document"
              placeholder={t("fields.identifyDocument.label")}
              className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-grey"
            />
          </div>
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
              {t("fields.address.label")}
            </label>
            <textarea
              name="address"
              className="w-full rounded-lg bg-white p-3 text-grey"
              placeholder={t("fields.address.placeholder")}
              rows="5"
            ></textarea>
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="font-bold text-darkGrey">
              {t("fields.carInfo.label")}
            </label>
            <textarea
              name="car_info"
              className="w-full rounded-lg bg-white p-3 text-grey"
              placeholder={t("fields.carInfo.placeholder")}
              rows="5"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-end">
            <button className="rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white">
              {t("buttonsText.quote")}
            </button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default FormQuote;
