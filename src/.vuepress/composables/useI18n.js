// docs/.vuepress/composables/useI18n.js
import { computed } from 'vue';
import { useRouteLocale } from 'vuepress/client';
import { I18N_DICTIONARY } from '../i18n.js';

export function useI18n(moduleName = 'common') {
  const routeLocale = useRouteLocale();

  // 根据当前路由的 locale (例如 / 或 /en/) 匹配字典，兜底 fallback 到 '/'
  const i18n = computed(() => {
    const moduleDict = I18N_DICTIONARY[moduleName] || I18N_DICTIONARY['common'];
    const currentPath = routeLocale.value || '/';

    return moduleDict[currentPath] || moduleDict['/'];
  });

  return {
    i18n,
    routeLocale
  };
}