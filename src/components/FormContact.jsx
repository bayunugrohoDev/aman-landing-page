"use client"

import React from "react";
import FormCard from "./FormCard";
import Input from "./Input";
import { useTranslations } from "next-intl";
import { sendEmail } from "@/utils/email";

const FormContact = () => {
  const t = useTranslations("forms");


  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event);
  }

  return (
    <FormCard>
     <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-12">
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
              {t("fields.subject.label")}
            </label>
            <textarea
              className="w-full rounded-lg bg-white p-3 text-grey"
              placeholder={t("fields.subject.placeholder")}
              name="subject"
              rows="5"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              value="Send"
              className="rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white"
            >
              {t("buttonsText.contact")}
            </button>
          </div>
          <div className="col-span-2 flex justify-end">
            <p className="text-sm font-normal text-darkGrey">
              {t("note.contact")}
            </p>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default FormContact;
