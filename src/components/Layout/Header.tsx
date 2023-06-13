import { NImage, NLayoutHeader } from 'naive-ui'

export default function Header() {
  return (
    <NLayoutHeader bordered class='h-64px flex items-center justify-between px-30px'>
      <div class="flex items-center">
        <NImage width="40" src="https://www.hellozxb.com/avatar.jpg" preview-disabled class="b-rd-5px" />
        <span class="ml-10px text-17px font-bold text-hex-222 op70">BackstageManagement</span>
      </div>
    </NLayoutHeader>
  )
}
