import { labels } from './labels';
const default_lng = "ka";

export default (code, prp, lng = default_lng) => {
    if (code) {
      let res = labels && labels[code] && labels[code][lng];
      if (res && prp) {
        res = res[prp] || res;
      }
      return res;
    }
    return "??? " + code;
}