import { useTranslations } from "next-intl";
import React from "react";
import Input from "./Input";
import FormCard from "./FormCard";

const FormQuote = () => {
  const t = useTranslations("forms");

  return (
    <FormCard>
      <form>
        <div className="grid w-full grid-cols-2 gap-6  md:gap-12">
          <Input
            className="md:"
            label={t("fields.name.label")}
            placeholder={t("fields.name.placeholder")}
          />
          <div className="col-span-2 flex w-full flex-col gap-1 md:col-span-1">
            <label className="font-bold text-darkGrey">
              {t("fields.identifyDocument.label")}
            </label>
            <input
              type="file"
              placeholder={t("fields.identifyDocument.label")}
              className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-grey"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1 md:col-span-1">
            <label className="font-bold text-darkGrey">
              {t("fields.email.label")}
            </label>
            <input
              type="email"
              placeholder={t("fields.email.label")}
              className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-grey"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1 md:col-span-1">
            <label className="font-bold text-darkGrey">
              {t("fields.phoneNumber.label")}
            </label>
            <input
              type="text"
              placeholder={t("fields.phoneNumber.placeholder")}
              className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-grey"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="font-bold text-darkGrey">
              {t("fields.address.label")}
            </label>
            <textarea
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
