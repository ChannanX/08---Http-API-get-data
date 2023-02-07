<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>The Telegram</template>

    contact
    <a href="https://t.me/logicBuilder" target="_blank" rel="noopener"
      >official Thetelegram</a
    >
    Real-time amazon data API. Get product, reviews and keyword details. Easy to
    use and reliable I’m on Telegram
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>

    <template #heading>News and announcements</template>

    News and announcements
    <a href="https://t.me/logicApi" target="_blank" rel="noopener">
      Telegram Channel</a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Amazon</template>

    You can help us by
    <a
      href="https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=585475370855&hvpos=&hvnetw=g&hvrand=12254511956005555122&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=21036&hvtargid=kwd-10573980&hydadcr=2246_13468515&gclid=CjwKCAiAioifBhAXEiwApzCzttkA5nqlA5fYh6dy9TXnlvrld_EyjiSwEey6jSDtKSM-8XQkPuKWUxoCBb0QAvD_BwE"
      target="_blank"
      rel="noopener"
      >becoming a sponsor</a
    >.
  </WelcomeItem>
</template>
