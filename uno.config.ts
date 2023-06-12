import {
  defineConfig,
  presetAttributify,
  presetMini,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini(),
  ],
})
