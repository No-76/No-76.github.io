// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/left-blog-info.scss"
import "vuepress-theme-hope/presets/bounce-icon.scss"
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"

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
