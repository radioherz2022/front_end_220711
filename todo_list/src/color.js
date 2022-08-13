import { lighten } from "polished";
// color값을 지정하지 않고 기존 색상에서 약간 밝게, 약간 어둡게 설정 가능

export const main_color = "#5a580b";

export const point_color = "#d7b107";
export const white_color = "#fff";
export const bg_color = "#ddd";

export const hover_color = lighten(0.1, main_color);

// export const active_color = darken(0.1, main_color);