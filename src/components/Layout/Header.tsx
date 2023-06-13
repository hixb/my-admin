import { NAvatar, NDropdown, NIcon, NInput, NLayoutHeader } from 'naive-ui'
import { Transition, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default function Header() {
  const avatarOptions = [
    { label: '用户资料', key: 'information' },
    { label: '设置', key: 'settings' },
    { label: '退出登录', key: 'outlogin' },
  ]

  const isShowSearch = ref(false)
  const useSearchBoxRef = ref<HTMLElement>()
  onClickOutside(useSearchBoxRef, () => isShowSearch.value = false)

  return (
    <NLayoutHeader class='h-64px flex items-center justify-between header-shadow b-rd-10px py-12px px-14px bg-hex-fff relative'>
      <NIcon size="25" class="cursor-pointer">
        <svg onClick={() => isShowSearch.value = !isShowSearch.value} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search stoke-current text-warning">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </NIcon>
      <Transition>
        {
          isShowSearch.value && (
            <NInput ref={useSearchBoxRef} class="absolute top-68px left-0 z-30" style="width: 330px;" type="text" size="large" placeholder="搜索功能...">
              {{
                prefix: () => (
                  <NIcon size="15">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search stoke-current text-warning">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </NIcon>
                ),
              }}
            </NInput>
          )
        }
      </Transition>
      <div class="flex items-center">
        <div class="flex flex-col items-end mr-10px">
          <p class="text-14px text-hex-626262 m0">hixb</p>
          <span class="text-12px text-hex-a0aec0">admin</span>
        </div>
        <NDropdown options={avatarOptions} showArrow={true}>
          <NAvatar class="cursor-pointer" round size="medium" src="https://www.hellozxb.com/avatar.jpg" />
        </NDropdown>
      </div>
    </NLayoutHeader>
  )
}
