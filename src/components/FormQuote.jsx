import { useTranslations } from "next-intl";
import React from "react";

const FormQuote = () => {
  const t = useTranslations("forms");

  return (
    <div className="px-[96px] py-16 bg-lightGrey rounded-2xl">
      <div className="flex flex-col gap-8">
        <form>
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-1">
              <label className="text-darkGrey font-bold">{t('fields.name.label')}</label>
              <input
                type="text"
                placeholder={t('fields.name.placeholder')}
                className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-darkGrey font-bold">
                {t('fields.identifyDocument.label')}
              </label>
              <input
                type="file"
                placeholder={t('fields.identifyDocument.label')}
                className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-darkGrey font-bold">{t('fields.email.label')}</label>
              <input
                type="email"
                placeholder={t('fields.email.label')}
                className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-darkGrey font-bold">{t('fields.phoneNumber.label')}</label>
              <input
                type="text"
                placeholder={t('fields.phoneNumber.placeholder')}
                className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-darkGrey font-bold">{t('fields.address.label')}</label>
              <textarea
                className="w-full bg-white text-grey p-3 rounded-lg"
                placeholder={t('fields.address.placeholder')}
                rows="5"
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-darkGrey font-bold">{t('fields.carInfo.label')}</label>
              <textarea
                className="w-full bg-white text-grey p-3 rounded-lg"
                placeholder={t('fields.carInfo.placeholder')}
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-end col-span-2">
              <button className="py-[10px] px-6 bg-blazerBlue text-white font-bold rounded-full">
               {t('buttonsText.quote')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormQuote;
