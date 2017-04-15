import {labels} from './labels';
const default_lng = "ka";

export const setUserLang = lng => default_lng = lng;

export default (code, prp, lng = default_lng) => {
    if (!code) {
        return "i18n-no_label_code";
    }
    let lbl_node = labels && labels[code] && labels[code][lng];
    if (!lbl_node) {
        lbl_node = "??? " + code;
    } else if (prp) {
        lbl_node = lbl_node[prp] || lbl_node;
    }
    return lbl_node;
}
