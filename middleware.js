import createMiddleware from 'next-intl/middleware';
import {localePrefix} from './navigation';
import { locales } from '@/constants/data';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales
});