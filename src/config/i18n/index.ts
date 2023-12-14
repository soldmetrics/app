import { I18n } from "i18n-js";

import { ptBR } from "./pt-BR";
import { en } from "./en";
import AsyncStorage from "@react-native-async-storage/async-storage";

const i18n = new I18n({
  en,
  "pt-BR": ptBR,
});

async function initI18n() {
  const localeStorage = await AsyncStorage.getItem("language");
  const defaultLocale = "pt-BR";

  i18n.defaultLocale = localeStorage || defaultLocale;
  i18n.locale = localeStorage || defaultLocale;
};

initI18n();

export default i18n;
