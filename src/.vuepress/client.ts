// .vuepress/client.ts
import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

export default defineClientConfig({
    setup() {
        setupRunningTimeFooter(
            new Date("2023-09-28"),
            {
                "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true,
        );
    
    },
});
