<template>
    <div class="menu">
        <div class="lds-ellipsis" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul class="menu-list" v-else>
            <li class="menu-item" v-for="(item, index) in menu" :key="index">
                <router-link :to="{name: 'home-id', params: {id: item._id}}">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            menu: {
                type: Array,
                default: () => []
            },
            loading: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        background-color: #FFFFFF;
        max-width: 280px;
        width: 100%;
        padding: 10px 0;
        font-size: 14px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
        margin-right: 30px;
        border-radius: 1px;
        display: flex;
        justify-content: center;
        .menu-list {
            width: 100%;
            .menu-item {
                height: 40px;
                transition: .2s;
                &:hover {
                    background-color: rgba(0,0,0,.02);
                }
                a {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    padding: 0 15px;
                    font-weight: 500;
                    color: #262626;
                    &.router-link-exact-active {
                        color: #339DEC;
                    }
                }
            }
        }
    }

    .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 30px;
    }
    .lds-ellipsis div {
        position: absolute;
        top: 9px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #339DEC;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.4s infinite;
    }
    .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.4s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.4s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.4s infinite;
    }
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
</style>
