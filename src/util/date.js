import { format, register } from 'timeago.js';
import KoLcoale from 'timeago.js/lib/lang/ko';

register('ko', KoLcoale);

export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}