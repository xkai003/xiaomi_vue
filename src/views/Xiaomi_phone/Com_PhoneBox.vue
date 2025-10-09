<template>
    <div class="box">
        <div class="centerbox">
            <PhoneOne></PhoneOne>
            <PhoneTwo></PhoneTwo>
            <PhoneThree></PhoneThree>
            <PhoneFour></PhoneFour>
            <PhoneFive></PhoneFive>
            <PhoneSix></PhoneSix>
            <PhoneSeven></PhoneSeven>
            <PhoneEight></PhoneEight>
            <PhoneNine></PhoneNine>
            <PhoneTen></PhoneTen>
        </div>
    </div>
</template>

<script setup>
import PhoneTwo from './PhoneTwo.vue';
import PhoneOne from './PhoneOne.vue';
import PhoneThree from './PhoneThree.vue';
import PhoneFour from './PhoneFour.vue';
import PhoneFive from './PhoneFive.vue';
import PhoneSix from './PhoneSix.vue';
import PhoneSeven from './PhoneSeven.vue';
import PhoneEight from './PhoneEight.vue';
import PhoneNine from './PhoneNine.vue';
import PhoneTen from './PhoneTen.vue'
</script>
<style scoped>
.box{
    width: 100%;
    padding: 30px 0px 30px 0px;
    background-color: #f3f1f1;
    /* flex布局 */
    display:flex;
    justify-content: center;
}
.box .centerbox{
    width: 88%;
    /* border: 1px solid rgb(233, 72, 23); */
}
</style>